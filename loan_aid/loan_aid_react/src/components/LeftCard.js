import React from 'react'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import LeftCardResult from './LeftCardResult';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';



const QUERY_RATES = gql`
query{
    rates{
      id
      rate
    }
  }
`;

export default function LeftCard(props) {

    const { data, loading } = useQuery( QUERY_RATES );

    return (
        <Box style={{ maxWidth: '300px', color: 'rgba(0, 0, 0, 0.35)' }}>
            <Typography component="h1" variant="h5" align="center">
                Estimated Payment
            </Typography>
            <Typography component="h1" variant="h2" align="center" style={{ marginBottom: '2rem', color: 'black' }}>
                {props.estPayment}
            </Typography>

            <LeftCardResult text="Loan Amount" value={props.loanAmount} />
            <LeftCardResult text="Down Payment" value={props.downPayment} />
            <LeftCardResult text="Loan Term" value={props.loanTerm} />
            {
                loading ? 
                <LeftCardResult text="Property Tax" value={0} /> :
                <LeftCardResult text="Property Tax" value={data.rates.length ? data.rates[Math.floor(Math.random() * data.rates.length)].rate : '1.5'} />
            }
            
        </Box>
    )
}
