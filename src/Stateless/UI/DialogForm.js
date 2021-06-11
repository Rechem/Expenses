import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Form from './Form'

const Modal = (props) => {

  const { open, onClose } = props;

  const useStyles = makeStyles( theme => ({
    root : {
      padding :'16px 32px'
    }
  }))
  const classes = useStyles()


  // const handleListItemClick = (value) => {
  //   onClose(value);
  // };

    return (
        <Dialog open={open} onClose={onClose}>
          <DialogTitle className={classes.root}>
          Add a new expense
          </DialogTitle>
          <DialogContent className={classes.root}>
            {/* <Paper> */}
              <Form onClose = {props.onClose}/>
            {/* </Paper> */}
          </DialogContent>
        </Dialog>
    );
};

export default Modal;