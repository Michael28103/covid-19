import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FormControl, Select, MenuItem,
  Card, CardContent, Typography } from '@mui/material'
import InfoBox from './Components/InfoBox.jsx'
import Map from './Components/Map.jsx'
import Table from './Components/Table.jsx'
import { sortData } from "./util.jsx"
// import Graph from "./Components/Graph.js"

// State is how to write a variable in react
// UseEffect runs a piece of code based on a given condition
export function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([
    "Worldwide"
  ])
  const [countryInfo, setCountryInfo] = useState({});
  const [mapCountries, setMapCountries] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [mapCenter, setMapCenter] = useState({ lat: 32.7502, lng: 114.7655 });
  const [mapZoom, setMapZoom] = useState(3);




  useEffect(() => {
    fetch ("https://disease.sh/v3/covid-19/all")
    .then(response => response.json())
    .then(data => {
      setCountryInfo(data);
    })
  }, [])

  // async sends a request(pings to a server), wait for it, and doing something with it
  useEffect(() => {
    // Runs once when the componenet loads and thats it
    const getCountries = async() => {
      await fetch ("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        // map is looping through the country array
        // this is returning an array of [name, value(country initials)]
        const countries = data.map((country) => (
          {
            name: country.country, // Name of the country
            value: country.countryInfo.iso2, // The initial of the country
          }
        ));
        
        let sorted = sortData(data);
        setTableData(sorted);
        setCountries(countries);
        setMapCountries(data);
      });
    };
    // This is calling the function
    getCountries();
  }, []);


  const countryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);

    // If the country code is worldwide then it will go to the first link if not
    // then it will go to the second link
    const url = countryCode === 'Worldwide' ? `https://disease.sh/v3/covid-19/all` : 
    `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
    // Getting the response and then turning it into a json format
    .then (response => response.json())
    .then (data => {
      // Updates the input field
      setCountry(countryCode);
      // Stores the response of the country info into a var
      setCountryInfo(data);
      setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
      setMapZoom(4);
    });
  };

  return (
    <Container>
      <Left>
        <Header>
          <h1> COVID-19 Tracker </h1>
          <FormControl className = "dropdown">
            <Select variant= "outlined" onChange={countryChange} value={country}>
              <MenuItem selected classes={{ root: 'MenuItem', selected: 'selected' }} value="Worldwide">Worldwide</MenuItem>
              {
                countries.map( country => (
                  <MenuItem value={country.value}>{country.name}</MenuItem>
                 ))
              }
            </Select>
          </FormControl>
        </Header>
        <Info>
          <InfoBox onClick={(e) => setCasesType("cases")} title="COVID-19"  cases={countryInfo.cases} total={countryInfo.todayCases}/>
          <InfoBox onClick={(e) => setCasesType("recovered")} title="Recovered"  cases={countryInfo.recovered} total={countryInfo.todayRecovered}/>
          <InfoBox onClick={(e) => setCasesType("deaths")} title="Deaths"  cases={countryInfo.deaths} total={countryInfo.todayDeaths}/>
        </Info>
        <Map
          countries={mapCountries}
          casesType={casesType}
          center={mapCenter}
          zoom={mapZoom}
        />
      </Left>
      <Right>
        <Card classes={{ label: 'cards' }} sx={{ border: '2px solid #ddd', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: '#f0f0f0' }}>
          <CardContent>
            <h1>Current Cases by Country</h1>
            <Table countries={tableData} />
            {/* <Graph /> */}
          </CardContent>
        </Card>
      </Right>
  </Container>
  );
}


const Container = styled.div `

  background-color: #f8f9fa;
  height: 100vh;
  width: 100%;
  display: flex; 
  justify-content: space-evenly;
  color: #333;

  @media (max-width: 890px) {
    flex-direction: column;
  }
  .dropdown {
    background-color: #f0f0f0; 
    border-radius: 6px;
    color: #333;
  }
`
const Left = styled.div `
  flex: 0.9;

  h1 {
    color: #333;
    font-weight: 700;
    font-size: 2.5rem;
  }
`
const Right = styled.div `
  padding: 15px;
  h1 {
    font-size: 22px;
    color: black;
  }
  cards {
    color: #121212;
  }
`

const Header = styled.div `
  display:flex;
  align-items: center;
  justify-content: space-between;
`

const Info = styled.div `
  display:flex;
  justify-content: space-between;
  padding-top: 10px;
`

export default App;
