import {Card, CardContent, Typography } from "@mui/material"
import { formatNumber } from '../util.jsx'


export default function InfoBox({ title, cases, total }) {
    return (
        <Card sx={{ border: '2px solid #ddd', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: '#f0f0f0' }}>
            <CardContent>
                <Typography className="title" color="textSecondary">
                  {title}
                </Typography>
                <h2 className="cases">{formatNumber(cases)}</h2>
                <Typography className="total" color="textSecondary">
                    {formatNumber(total)} Today
                </Typography>
            </CardContent>
        </Card>
    )
}

