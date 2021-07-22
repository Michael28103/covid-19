import React from 'react'
import styled from 'styled-components'

function Table({ countries }) {
    return (
        <Container>
            {   
                // Maps through all the countries and splits it apart 
                // and the country/cases
                // returns a table row that consists of table data
                countries.map(({country, cases}) => (   
                    <tr>
                        <td>
                            {country}
                        </td>
                        <td>
                            {cases}
                        </td>
                    </tr>
                ))
            }
        </Container>
    )
}

const Container = styled.div `
    margin-top: 20px;
    overflow: scroll;
    height: 400px;
    
`


export default Table
