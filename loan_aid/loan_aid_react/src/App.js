import React from 'react';
import Header from './components/Header';
import Dash from './components/Dash';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { createTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql/', // your GraphQL Server 
});

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#43a047',
      dark: '#2e7d32',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#43a047',
      dark: '#2e7d32',
      contrastText: '#000',
    },
  },
});

const GlobalCss = withStyles({
  '@global': {
    '.MuiSlider-marked': {
      marginBottom: '0',
    },
    '.MuiSlider-rail':{
      height: '10px',
      borderRadius: '5px'
    },
    '.MuiSlider-track':{
      height: '10px',
      borderRadius: '5px'
    },
    '.MuiSlider-mark':{
      display: 'none'
    },
    '.MuiButtonGroup-groupedTextHorizontal':{
      borderRight: 'none !important'
    },
    '.MuiSlider-thumb':{
      top: '78%',
      border: '1px solid #43a047',
      height: '20px',
      width: '16px',
      borderRadius: '3px',
      background: '#ffffff',
      cursor: 'pointer',
      marginTop: '-14px', /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
      boxShadow: 'none !important'
    },
    '.MuiSlider-thumb::after':{
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      content: "",
      position: 'absolute',
      borderRadius: '50%'
    },
    '.MuiOutlinedInput-root':{
      fontWeight: '600 !important',
      fontSize: '14px',
      color: '#424242'
    }
  },
})(() => null);

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    <Container maxWidth="md">
    <ThemeProvider theme={theme}>
      <GlobalCss />
        <Dash />
      </ThemeProvider>
    </Container>

  </ApolloProvider>
);
export default App;
