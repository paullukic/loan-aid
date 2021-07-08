import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import MoneySlider from './Slider';
import Jumbotron from './Jumbotron';
import LeftCard from './LeftCard';
import FormFooter from './FormFooter';

const useStyles = makeStyles((theme) => ({
    active: {
        boxSizing: 'border-box',
        borderBottom: '2px solid',
        borderRadius: '0',
        borderColor: 'rgba(67, 160, 71, 1) !important'
    },
    cardLeft: {
        backgroundColor: 'rgb(0 0 0 / 5%)',
        borderTopRightRadius: '5px',
        borderBottomRightRadius: '5px',
        padding: theme.spacing(4),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    margin: {
        margin: theme.spacing(1),
    },
    ml4:{
        marginLeft: theme.spacing(4)
    },
    center: {
        display: 'flex',
        alignItems: 'center',
    },
    bold: {
        fontWeight: 'bold'
    },
    MonetizationOnIcon: {
        display: 'inline-flex',
        marginRight: theme.spacing(2),
        verticalAlign: 'middle',
        height: '2rem',
        width: 'auto'
    },
    cardRight: {
        padding: theme.spacing(4),
        minHeight: '30rem'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        width: '10rem',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const marks = (amountMin, amount) =>{
    return [
        {
          value: 0,
          label: amountMin.toLocaleString(),
        },
        {
          value: 50,
          label: ((amount - amountMin) / 2).toLocaleString(),
        },
        {
          value: 100,
          label: amount.toLocaleString(),
        },
      ];
}


const makeCurrency = (currency) => {
    let symbol = '';

    switch (currency) {
        case 'USD':
            symbol = "$"
            break;
        case 'EUR':
            symbol = '€'
            break;
        case 'GBR':
            symbol = '£'
            break;
        default:
            symbol = '$'
    }

    return symbol
}

export default function Dash() {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('USD');

    const handleClickCurrency = (event) => {

        setCurrency(event.target.value ? event.target.value : event.target.textContent)
    }

    return (
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <Jumbotron />

            <Paper elevation={3}>
                <Grid container>
                    <Grid item xs>
                        <Container maxWidth="sm" className={classes.cardRight}>
                            <span className={classes.center} >
                                <MonetizationOnIcon color="primary" className={classes.MonetizationOnIcon} />
                                <Typography component="h1" variant="h6" className={classes.bold} >
                                    New Loan Application
                                </Typography>
                            </span>
                            <Box display="block" my={4}>
                                <InputLabel htmlFor="selectType">Type of Loan</InputLabel>
                                <NativeSelect input={<BootstrapInput />} id="selectType">
                                    <option value={'Standard'}>Standard</option>
                                    <option value={'Premium'}>Premium</option>
                                </NativeSelect>

                                <ButtonGroup color="primary" variant="text" className={classes.ml4}>
                                    <Button onClick={handleClickCurrency} className={currency === 'USD' ? classes.active : null} value='USD'>USD</Button>
                                    <Button onClick={handleClickCurrency} className={currency === 'EUR' ? classes.active : null} value='EUR'>EUR</Button>
                                    <Button onClick={handleClickCurrency} className={currency === 'GBR' ? classes.active : null} value='GBR'>GBR</Button>
                                </ButtonGroup>
                            </Box>
                            
                            <Box display="block" m={2}>
                                <MoneySlider text='Home Price' currency={makeCurrency(currency)} marks={marks(50000, 500000)} min={50000} max={500000} />
                                <MoneySlider text='Down Payment 20%' currency={makeCurrency(currency)} marks={marks(10000, 100000)} min={10000} max={100000} />
                                <MoneySlider text='Duration in Months' currency="months" marks={marks(20, 240)} min={20} max={240} />
                            </Box>

                            <Box mt={6}>
                                <FormFooter />
                            </Box>
                            
                        </Container>
                    </Grid>
                    <Grid item className={classes.cardLeft}>
                        <LeftCard 
                            estPayment={500}
                            loanAmount={555}
                            downPayment={545}
                            loanTerm={22}
                            tax={5}/>                        
                    </Grid>
                </Grid>
            </Paper>
            <Box mt={8}>
            </Box>
        </Container>
    );
}