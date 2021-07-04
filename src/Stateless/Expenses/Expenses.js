import React from 'react';
import Button from '@material-ui/core/Button';
import classes from './Expenses.module.css'
import Typography from '@material-ui/core/Typography';
import Icon from '../UI/CategoriesIcons/Icon/Icon';
import Expense from './Expense/Expense'
import DialogForm from '../UI/DialogForm'
import Form from '../UI/Form'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import {makeStyles } from '@material-ui/core/styles'
import {connect} from 'react-redux'
import * as actions from '../../store/actions'

const Expenses = (props) => {

    const useStyles = makeStyles(theme => ({
        expenses : {
            marginTop : 36,
        },
        addButton : {
            marginTop: 8,
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
            <Box style={{maxHeight : 300, overflow : 'auto'}}>
                {props.expenses.map(expense =>
                <Expense
                key={expense.title + expense.date}
                id={expense.id}
                title={expense.title}
                date="Today"
                price={expense.price}
                description = {expense.description}
                category={expense.category}/>
                )}
            </Box>
            {/* <Expense/> */}
            <DialogForm open={open} onClose={handleClose} onSubmit={props.addExpense}/>
        </section>
    );
};

const mapStateToProps = state => {
    return {
        expenses : state.expenses
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addExpense : expenseData => dispatch(actions.addExpense(expenseData)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);