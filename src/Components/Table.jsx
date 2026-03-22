  
import styled from 'styled-components'
import { formatNumber } from '../util.jsx'

export default function Table({ countries }) {
    return (
        <Container>
            <TableElement>
                <tbody>
                    {   
                        // Maps through all the countries and splits it apart 
                        // and the country/cases
                        // returns a table row that consists of table data
                        countries && countries.map(({country, cases}, index) => (   
                            <TableRow key={country}>
                                <TableData>
                                    {country}
                                </TableData>
                                <TableData>
                                    <strong>{formatNumber(cases)}</strong>
                                </TableData>
                            </TableRow>
                        ))
                    }
                </tbody>
            </TableElement>
        </Container>
    )
}

const Container = styled.div `
    margin-top: 20px;
    overflow-y: auto;
    overflow-x: hidden;
    height: 400px;
    background-color: rgba(255, 255, 255, 0.95);
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
    backdrop-filter: blur(10px);
    
`

const TableElement = styled.table `
    width: 100%;
    border-collapse: collapse;
    border: 2px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
`

const TableRow = styled.tr `
    &:nth-child(even) {
        background-color: rgba(102, 126, 234, 0.1);
    }
    &:nth-child(odd) {
        background-color: transparent;
    }
    &:hover {
        background-color: rgba(102, 126, 234, 0.2);
        transform: scale(1.01);
        transition: all 0.2s ease;
    }
`

const TableData = styled.td `
    padding: 16px 12px;
    border-bottom: 1px solid rgba(102, 126, 234, 0.2);
    text-align: left;
    font-size: 14px;
    word-wrap: break-word;
    max-width: 150px;
    color: #333;
    &:first-child {
        font-weight: 600;
    }
    &:last-child {
        font-weight: bold;
    }
`