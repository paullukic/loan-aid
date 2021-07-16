import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '10px'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OfferCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          Loan Amount: <span style={{color: 'black'}}>{props.loanAmount.toLocaleString()}</span>
        </Typography>
        <Typography className={classes.title} color="textSecondary" >
          Down Payment: <span style={{color: 'black'}}>{props.downPayment.toLocaleString()}</span>
        </Typography>
        <Typography className={classes.title} color="textSecondary" >
          Loan Term: <span style={{color: 'black'}}>{props.loanTerm}</span>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
