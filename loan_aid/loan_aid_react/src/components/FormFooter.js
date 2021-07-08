import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

export default function FormFooter() {
    return (
        <Container maxWidth="md">
            <Button variant="contained" color="primary" fullWidth >
                GET REAL MORTGAGE OFFER
            </Button>
            <Box mt={3}>
                <Typography component="p" variant="body2" align="center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
            </Box>
        </Container>
    )
}
