
# Crypto Price Tracker Chrome Extension

A simple and lightweight Chrome extension that allows users to track cryptocurrency prices in real-time using the Blockchair API. This extension provides users with essential crypto market data, price alerts, and a price chart for selected cryptocurrencies.

## Features

- **Real-Time Price Tracking:** Displays the current price of Bitcoin, Ethereum, and Litecoin using the Blockchair API.
- **Price Chart:** Shows the historical price trend of the selected cryptocurrency in a simple line chart.
- **Price Alerts:** Allows users to set custom price alerts and get notified when the price reaches the specified value.
- **Lightweight and User-Friendly:** Designed to provide quick access to essential crypto information in an easy-to-use popup.

## How It Works

1. The extension uses the Blockchair API to fetch real-time cryptocurrency data.
2. It displays the current price of the selected cryptocurrency (Bitcoin, Ethereum, or Litecoin) in a simple interface.
3. A line chart shows the price trend, which updates every minute.
4. Users can set up price alerts and receive notifications when their specified price is reached.

## Getting Started

### Prerequisites

- Google Chrome browser installed.
- A Blockchair API key. You can obtain a free API key by signing up on the [Blockchair website](https://blockchair.com/).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/crypto-price-tracker-extension.git
   ```
   
2. **Download `chart.min.js` for Chart.js:**
   - Download `chart.min.js` from [Chart.js CDN](https://cdn.jsdelivr.net/npm/chart.js).
   - Place the `chart.min.js` file in the `libs/` directory inside the project folder.

3. **Configure API Key:**
   - Open `popup.js`.
   - Replace the placeholder `YOUR_API_KEY_HERE` with your actual Blockchair API key.
   ```javascript
   const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your actual API key
   ```

4. **Load the Extension into Chrome:**
   - Open the Chrome browser and navigate to `chrome://extensions/`.
   - Enable "Developer mode" using the toggle in the top right corner.
   - Click on "Load unpacked" and select the folder containing this project.

5. **Use the Extension:**
   - Click on the Crypto Price Tracker icon in the Chrome toolbar to open the popup.
   - Select a cryptocurrency to view its price and set price alerts.

## Usage

- **View Current Prices:** Select a cryptocurrency (Bitcoin, Ethereum, or Litecoin) to see the current price in USD.
- **View Price Chart:** The line chart displays the price trend for the selected cryptocurrency, updating every minute.
- **Set Price Alerts:** Enter a price value in the "Set Price Alert" section and click "Set Alert." The extension will notify you when the cryptocurrency reaches your specified price.

## Folder Structure

```
/crypto-price-tracker-extension
├── icons/                 # Icons for the extension
├── libs/                  # Contains local libraries (e.g., chart.min.js)
│   └── chart.min.js
├── popup.html             # HTML file for the extension popup interface
├── popup.js               # JavaScript file containing extension logic
├── styles.css             # Styling for the popup interface
├── manifest.json          # Configuration file for the Chrome extension
└── README.md              # This README file
```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any feature additions or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Blockchair API](https://blockchair.com/) for providing real-time cryptocurrency data.
- [Chart.js](https://www.chartjs.org/) for the charting library used in the extension.
- Icons made by [author] from [www.flaticon.com](https://www.flaticon.com/).

## Disclaimer

This extension is for informational purposes only and does not constitute financial advice. Always conduct your own research before making any investment decisions.
