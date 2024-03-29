import React from 'react';
import {useState, useEffect} from 'react'
import {makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl, InputLabel } from '@material-ui/core';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import * as categories from '../../store/categories'

const initialValues = {
    title : "",
    description :"",
    price :"",
    category:"",
    date: new Date(),
}

const Form = (props) => {

    const [values, setValues] = useState(props.values ? props.values : initialValues)

    const useStyles = makeStyles(theme => ({
        root : {
            '& .MuiFormControl-root':{
                width : '100%',
                marginBottom : theme.spacing(1),
            },
            width : 365,
            marginTop : theme.spacing(2)
        },
        strings : {
            marginBottom : theme.spacing(2)
        },
        buttons : {
            display : 'flex',
            marginTop : theme.spacing(6),
            justifyContent :'flex-end',
        }
    }))

    const classes = useStyles()

    const onChangeHandler = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name] : value
        })
    }

    return (
        <form className={classes.root} onSubmit={() => props.onAdd(values)}>
            <Grid>
                <Grid item xs={12}>
                    <TextField variant="outlined" label="Title"
                    name="title" value={values.title} onChange={onChangeHandler}
                    />
                    <TextField variant="outlined" label="Description" 
                    multiline rows={3} name="description" value={values.description}
                    onChange={onChangeHandler}/>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <TextField variant="outlined" label="Price"
                        name="price" value={values.price} onChange={onChangeHandler}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Box>
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel>Category</InputLabel>
                                <Select label="Category" defaultValue=""
                                name="category" value={values.category} onChange={onChangeHandler}>
                                    <MenuItem value="">None</MenuItem>
                                    <MenuItem value={categories.FOODDRINKS}>Food &#38; Drinks</MenuItem>
                                    <MenuItem value={categories.SUBSCRIPTIONS}>Subscriptions</MenuItem>
                                    <MenuItem value={categories.ELECTRONICS}>Electronics</MenuItem>
                                    <MenuItem value={categories.OTHERS}>Others</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Box className={classes.buttons}>
                {props.id ? 
                <Button color="primary" onClick={() => {props.onAdd({...values, id: props.id});props.onClose()}}>Save</Button>
                :
                <Button color="primary" onClick={() => {props.onAdd(values);props.onClose()}}>Add</Button>
                }
                <Button onClick={props.onClose}>Cancel</Button>
            </Box>
        </form>
    );
};

export default Form;