import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

import OfferCard from './OfferCard';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));


    const QUERY_OFFERS = () => gql`
        query{
            offers(loanAmount: $loanAmount, downPayment: $downPayment}, loanTerm: $loanTerm){
            id
            loanAmount
            downPayment
            loanTerm
            }
        }
    `;

export default function FormFooter(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    

    const offers = (loanAmount, downPayment, loanTerm) => {
        const { data, loading, error } = useQuery( QUERY_OFFERS, {
            variables: {loanAmount, downPayment, loanTerm}
        } );

        if (loading) return <CircularProgress />;
        if (error) return `Error!`;

        if (data && data.offers.length !== 0){
            let offerArray = [];

            data.offers.forEach(offer => {
                if(offerArray.length < 4)
                offerArray.push(offer)
            })
               
            return (
                offerArray.forEach(offer => {
                    <OfferCard 
                    loanAmount={offers(offer.loanAmount)}
                    downPayment={offers(offer.downPayment)}
                    loanTerm={offers(offer.loanTerm)}/>
                })
            );
        }

        else return 'No Offers'
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container maxWidth="md">
            <Button variant="contained" color="primary" fullWidth onClick={handleOpen}>
                GET REAL MORTGAGE OFFER
            </Button>

            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box>
                        {offers(props.loanAmount, props.downPayment, props.loanTerm)}
                    </Box>
                </Fade>
            </Modal>
            <Box mt={3}>
                <Typography component="p" variant="body2" align="center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
            </Box>
        </Container>
    )
}
