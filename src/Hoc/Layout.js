import React from 'react';
import classes from './Layout.module.css'

const Layout = (props) => {
    return (
    <div className={classes.LayoutBackground}>
        <div className={classes.Layout}>
            {props.children}
        </div>
    </div>
    )
};

export default Layout;