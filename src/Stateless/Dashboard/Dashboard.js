import React from 'react';
import classes from './Dashboard.module.css'
import TotalExpenses from './DashboardItems/TotalExpenses/TotalExpenses'
import TotalSpent from './DashboardItems/TotalSpent/TotalSpent'
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux'

const Dashboard = (props) => {

    return (
        <header>
            <Typography variant="body1" component="div" color="textSecondary"
            className={classes.root}>
              Dashboard
            </Typography>
            <div className={classes.Dashboard}>
                <TotalExpenses>{props.totalExpenses}</TotalExpenses>
                <TotalSpent>{props.totalSpent}</TotalSpent>
            </div>
        </header>
    );
};

const mapStateToPorps = state => {
    return {
        totalExpenses : state.totalExpenses,
        totalSpent : state.totalSpent
    }
}

export default connect(mapStateToPorps,null)(Dashboard);