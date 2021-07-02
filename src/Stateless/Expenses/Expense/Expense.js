import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Icon from '../../UI/CategoriesIcons/Icon/Icon'
import classes from './Expense.module.css'
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CategoriesIcons from '../../UI/CategoriesIcons/CategoriesIcons'


const Expense = (props) => {
    const theme = useTheme();

    const options = ["Edit","Delete"]
    const ITEM_HEIGHT = 48;


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Card className={classes.root}>
            <div className={classes.CardBody}> 
                <CategoriesIcons category = {props.category}/>
                <Box>
            <Typography variant="body1" component="div" color="textPrimary">
                {props.title}
            </Typography>
            <Typography variant="body2" component="div" color="textSecondary">
                {props.date}
            </Typography>
                </Box>
                <Typography
                variant="body1" component="div" color="textPrimary"
                className={classes.Price}>
                    {props.price + " DZD"}
                </Typography>
            <div>
                <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <Icon color="black">more_vert</Icon>
                </IconButton>
                <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                    }}
                >
                    {options.map((option) => {
                        let color = 'textPrimary'
                        if(option==='Delete'){
                            color = 'error'
                        }
                        return (
                        <MenuItem key={option} onClick={handleClose}>
                            <Typography color={color}>
                                {option}
                            </Typography>
                        </MenuItem>)
                    })}
                </Menu>
                </div>
            </div>
        </Card>
    );
};

export default Expense;