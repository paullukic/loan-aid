import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import LanguageIcon from '@material-ui/icons/Language';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    login: {
        marginLeft: 10,
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        LoanAid.AI
                    </Typography>

                    <Button color="inherit">Login</Button>
                    <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
                        <LanguageIcon />
                        <Typography variant="button" display="block" className={classes.login}>
                            EN
                        </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
