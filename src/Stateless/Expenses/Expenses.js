import React from 'react';
import Button from '@material-ui/core/Button';
import classes from './Expenses.module.css'
import Typography from '@material-ui/core/Typography';
import Icon from '../UI/Icon/Icon';
import Expense from '../UI/Expense/Expense'
import DialogForm from '../UI/DialogForm'
import Form from '../UI/Form'
import Paper from '@material-ui/core/Paper'
import {makeStyles } from '@material-ui/core/styles'

const Expenses = () => {

    const useStyles = makeStyles(theme => ({
        expenses : {
            marginTop : 36,
        },
        addButton : {
            marginTop: 8,
            marginBottom: 8,
        },
        text : {
            marginBotton : 8,
        },
        

    }))

    const classes = useStyles()

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return (
        <section className={classes.expenses}>
            <Typography variant="body1" component="div" color="textSecondary"
            className={classes.text}>
              Expenses
            </Typography>
            <Button
            className={classes.addButton}
            color="primary"
            variant = "contained"
            startIcon={<Icon size="24" color="white">add</Icon>}
            size='large'
            fullWidth
            onClick={handleOpen}>
                <Typography variant="body1" component="div">Add new expense</Typography>
            </Button>
            <Expense/>
            {/* <Paper className={classes.pageContent}>
                <Form/>
            </Paper> */}
            <DialogForm open={open} onClose={handleClose}/>
        </section>
    );
};

export default Expenses;