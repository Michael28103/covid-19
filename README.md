# COVID-19 Tracker

A modern, responsive web application for tracking COVID-19 cases worldwide. Built with React, Vite, and Material-UI, featuring real-time data from the disease.sh API.

## Features

- **Global Overview**: View worldwide COVID-19 statistics
- **Country-Specific Data**: Select any country to see detailed case numbers
- **Interactive Map**: Visualize cases on an interactive Leaflet map with color-coded circles
- **Data Table**: Browse cases by country in a sortable table
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, light theme with subtle shadows and borders

## Technologies Used

- **Frontend**: React 19, Vite
- **Styling**: Styled Components, Material-UI
- **Mapping**: React Leaflet
- **Data**: disease.sh API
- **Formatting**: Numeral.js

## Screenshots

*Note: Add actual screenshots to the `screenshots/` folder*

### Desktop View
![Desktop Screenshot](./screenshots/desktop.png)
*Main dashboard showing global stats, country selector, map, and data table*

### Mobile View
![Mobile Screenshot](./screenshots/mobile.png)
*Responsive layout optimized for mobile devices*

### Map Interaction
![Map Screenshot](./screenshots/map.png)
*Interactive map with case data visualization*

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/covid-tracker.git
   cd covid-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Project Structure

```
src/
├── Components/
│   ├── InfoBox.jsx      # Statistics cards
│   ├── Map.jsx          # Interactive map component
│   ├── Table.jsx        # Data table component
│   └── InfoBox.jsx
├── App.jsx              # Main application component
├── index.jsx            # Application entry point
├── util.jsx             # Utility functions and API calls
└── index.css            # Global styles
```

## API

This app uses the [disease.sh](https://disease.sh/) API for COVID-19 data:

- `/v3/covid-19/all` - Global statistics
- `/v3/covid-19/countries` - Country-specific data

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Data provided by [disease.sh](https://disease.sh/)
- Icons and UI components from [Material-UI](https://mui.com/)
- Mapping powered by [Leaflet](https://leafletjs.com/)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
