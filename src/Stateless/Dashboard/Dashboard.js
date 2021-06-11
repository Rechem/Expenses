import React from 'react';
import classes from './Dashboard.module.css'
import TotalExpenses from '../DashboardItems/TotalExpenses/TotalExpenses'
import TotalSpent from '../DashboardItems/TotalSpent/TotalSpent'
import Typography from '@material-ui/core/Typography';

const Dashboard = () => {

    return (
        <header>
            <Typography variant="body1" component="div" color="textSecondary"
            className={classes.root}>
              Dashboard
            </Typography>
            <div className={classes.Dashboard}>
                <TotalExpenses/>
                <TotalSpent/>
            </div>
        </header>
    );
};

export default Dashboard;