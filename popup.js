document.addEventListener("DOMContentLoaded", () => {
  const cryptoSelect = document.getElementById("crypto-select");
  const priceDisplay = document.getElementById("price-display");
  const alertPriceInput = document.getElementById("alert-price");
  const setAlertButton = document.getElementById("set-alert");

  let currentCrypto = cryptoSelect.value;
  let priceData = [];

  API_KEY = "G___lyZxup6H0gzEkUQzUhNoc8RlfFj4";

  // Fetch price data from Blockchair API
  async function fetchPrice(crypto) {
    try {
      const response = await fetch(`https://api.blockchair.com/${crypto}/stats?key=${API_KEY}`);
      const data = await response.json();
      const price = data.data.market_price_usd;
      priceDisplay.textContent = `$${price.toLocaleString()}`;
      return price;
    } catch (error) {
      console.error("Error fetching price:", error);
      priceDisplay.textContent = "Error fetching price";
    }
  }

  // Update price every minute
  async function updatePrice() {
    const price = await fetchPrice(currentCrypto);
    if (price) {
      priceData.push(price);
      if (priceData.length > 10) {
        priceData.shift();
      }
      updateChart();
      checkPriceAlert(price);
    }
  }

  // Initialize the chart
  const ctx = document.getElementById("price-chart").getContext("2d");
  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [], // Initial empty labels
      datasets: [
        {
          label: "Price (USD)",
          data: [], // Initial empty data
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          fill: false,
        },
      ],
    },
    options: {
      scales: {
        x: {
          display: false, // Hide x-axis labels
        },
        y: {
          beginAtZero: false,
        },
      },
    },
  });

  // Update the chart with new data
  function updateChart() {
    chart.data.labels = Array(priceData.length).fill("");
    chart.data.datasets[0].data = priceData;
    chart.update();
  }

  // Check if price meets alert condition
  function checkPriceAlert(currentPrice) {
    chrome.storage.local.get(["alertPrice", "alertCrypto"], (result) => {
      const alertPrice = result.alertPrice;
      const alertCrypto = result.alertCrypto;
      if (alertPrice && alertCrypto === currentCrypto) {
        if (currentPrice >= alertPrice) {
          chrome.notifications.create({
            type: "basic",
            //iconUrl: "icons/icon128.png",
            title: "Price Alert",
            message: `${currentCrypto.toUpperCase()} has reached $${currentPrice.toLocaleString()}`,
          });
          // Clear the alert
          chrome.storage.local.remove(["alertPrice", "alertCrypto"]);
        }
      }
    });
  }

  // Event listeners
  cryptoSelect.addEventListener("change", () => {
    currentCrypto = cryptoSelect.value;
    priceData = [];
    chart.data.datasets[0].label = `${currentCrypto.toUpperCase()} Price`;
    updatePrice();
  });

  setAlertButton.addEventListener("click", () => {
    const alertPrice = parseFloat(alertPriceInput.value);
    if (isNaN(alertPrice)) {
      alert("Please enter a valid price.");
      return;
    }
    chrome.storage.local.set({ alertPrice: alertPrice, alertCrypto: currentCrypto }, () => {
      alert(`Alert set for ${currentCrypto.toUpperCase()} at $${alertPrice}`);
      alertPriceInput.value = "";
    });
  });

  // Initial fetch
  updatePrice();
  // Update price every minute
  setInterval(updatePrice, 60000);
});
