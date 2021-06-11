import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Icon from '../../UI/Icon/Icon'

const TotalExpenses = () => {
  const useStyles = makeStyles({
    root: {
      marginRight : 8,
      width: 270,
      borderRadius: 30,
    }
  });

  const classes = useStyles();

    return (
        <Card className={classes.root}>
          <CardContent>
            <Icon size="36">tag</Icon>
            <Typography variant="h3" component="div" align='center' gutterBottom>
              12
            </Typography>
            <Typography variant="body1" component="div" color="textSecondary">
              Total expenses
            </Typography>
          </CardContent>
        </Card>
      );
};

export default TotalExpenses;