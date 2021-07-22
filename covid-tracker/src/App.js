import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FormControl, Select, MenuItem,
  Card, CardContent, Typography } from '@material-ui/core'
import InfoBox from './Components/InfoBox.js'
import Map from './Components/Map.js'
import Table from './Components/Table.js'
import { sortData } from "./util"
// import Graph from "./Components/Graph.js"

// State is how to write a variable in react
// UseEffect runs a piece of code based on a given condition
function App() {

  const [countries, setCountries] = useState([

  ]);
  const [country, setCountry] = useState([
    "Worldwide"
  ])
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState({});
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
        
        const sorted = sortData(data);
        setTableData(sorted);
        setCountries(countries);
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
    });
  };

  console.log('Country Info: ', countryInfo)

  return (
    <Container>
      <Left>
        <Header>
          <h1> COVID-19 Tracker </h1>
          <FormControl className = "dropdown">
            <Select variant="outlined" onChange={countryChange} value={country}>
              <MenuItem value="Worldwide">Worldwide</MenuItem>
              {
                countries.map( country => (
                  <MenuItem value={country.value}>{country.name}</MenuItem>
                 ))
              }
              {/* <MenuItem value="countries">1</MenuItem>
                  <MenuItem value="countries">2</MenuItem>
                  <MenuItem value="countries">3</MenuItem>
                  <MenuItem value="countries">4</MenuItem> */}
            </Select>
          </FormControl>
        </Header>
        <Info>
          <InfoBox title="COVID-19"  cases={countryInfo.todayCases} total={countryInfo.cases}/>
          <InfoBox title="Recoverd"  cases={countryInfo.todayRecovered} total={countryInfo.recovered}/>
          <InfoBox title="Deaths"  cases={countryInfo.todayDeaths} total={countryInfo.deaths}/>
        </Info>
        <Map />
      </Left>
      <Right>
        <Card>
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
  background-color: white;
  height: 100vh;
  width: 100%;
  display: flex; 
  justify-content: space-evenly;
  padding: 20px;

  @media (max-width: 890px) {
    flex-direction: column;
  }
`
const Left = styled.div `
  flex: 0.9;
`
const Right = styled.div `
  h1 {
    font-size: 22px;
  }
`

const Header = styled.div `
  display:flex;
  align-items: center;
  justify-content: space-between;
`

const dropdown = styled.div `
  background-color: white; 
`

const Info = styled.div `
  display:flex;
  justify-content: space-between;
`

export default App;
