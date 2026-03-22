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

<img width="1909" height="947" alt="image" src="https://github.com/user-attachments/assets/01f72ed1-98e8-4b27-8d13-42c11dc39043" />
*Main dashboard showing global stats, country selector, map, and data table*


### Map Interaction
<img width="1906" height="933" alt="image" src="https://github.com/user-attachments/assets/605e5fa5-420c-4cc0-ac19-9e94fb042add" />
*Interactive map with case data visualization*

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Michael28103/covid-tracker.git
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


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Data provided by [disease.sh](https://disease.sh/)
- 
