import React from 'react'
import OfferCard from './OfferCard';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '400px',
      flexWrap: 'wrap'
    },
  }));

const QUERY_OFFERS = gql`
    query($loanAmount: Int, $downPayment:Int, $loanTerm:Int){
        offers(loanAmount: $loanAmount, downPayment: $downPayment, loanTerm: $loanTerm){
        id
        loanAmount
        downPayment
        loanTerm
        }
    }
`;
  

export default function OffersModal(props) {
    const classes = useStyles();
    const loanAmount = props.loanAmount;
    const downPayment = props.downPayment;
    const loanTerm = props.loanTerm;

    const { data } = useQuery(QUERY_OFFERS, {
        variables: { loanAmount, downPayment, loanTerm }
    });

    if (!data || data.offers.length === 0) return <Typography component="h1" variant="h2" color='textPrimary' align="center">No offers</Typography>
    else return (data && data.offers.length !== 0 ? (
            <div className={classes.modal}>
                {
                data.offers.slice(0, 4).map(offer => 
                        <OfferCard
                            key={offer.id}
                            loanAmount={offer.loanAmount}
                            downPayment={offer.downPayment}
                            loanTerm={offer.loanTerm} />
                )}
            </div> 
        ) : "No offers"
    )
}
