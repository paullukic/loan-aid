import React from 'react'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import LeftCardResult from './LeftCardResult';

export default function LeftCard(props) {


    return (
        <Box style={{ maxWidth: '300px', color: 'rgba(0, 0, 0, 0.35)' }}>
            <Typography component="h1" variant="h5" align="center">
                Estimated Payment
            </Typography>
            <Typography component="h1" variant="h3" align="center" style={{ marginBottom: '2rem', color: 'black' }}>
                {props.estPayment}
            </Typography>

            <LeftCardResult text="Loan Amount" value={props.loanAmount} />
            <LeftCardResult text="Down Payment" value={props.downPayment} />
            <LeftCardResult text="Loan Term" value={props.loanTerm} />
            <LeftCardResult text="Property Tax" value={props.tax} />
        </Box>
    )
}
