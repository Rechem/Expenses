import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import './Icon.css'

const Icon = (props) => {
    const theme = useTheme();
    const classes = ["material-icons-outlined", "md-" + props.size, props.color].join(" ")
    let color = theme.palette.primary.main

    if(props.color != null){
        color = props.color
    }
    return (
        <span className={classes} style ={{color:color}}>
            {props.children}
        </span>
    );
};

export default Icon;