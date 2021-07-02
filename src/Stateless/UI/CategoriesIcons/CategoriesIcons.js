import React from 'react';
import Icon from './Icon/Icon'
import { useTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Box from '@material-ui/core/Box'
import * as categories from '../../../store/categories'

const CategoriesIcons = (props) => {

    const theme = useTheme();

    let iconName = ''
    let color = ''
    switch (props.category) {
        case categories.FOODDRINKS:
            iconName = "fastfood"
            color = "#E74C3C"
            break;
        case categories.ELECTRONICS:
            iconName = "settings"
            color = '#3498DB'
            break;
        case categories.SUBSCRIPTIONS:
            iconName = "payment"
            color = "#2ECC71"
            break;
        default:
            iconName = "grain"
            color= "#9B59B6"
            break;
    }
    console.log(props.color)
    return (
        <div>
            <Box component="div"
                style={
                    {
                        backgroundColor: fade(color, 0.1),
                        // backgroundColor: fade(theme.palette.primary.main, 0.1),
                        height: 40,
                        width: 40,
                        marginRight: 16,
                        borderRadius: 10,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                <Icon size="24" color={color}>{iconName}</Icon>
            </Box>
        </div>
    );
};

export default CategoriesIcons;