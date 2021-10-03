import { Button, Grid, TextField,withStyles } from "@material-ui/core";
import React,{useState} from "react";
import CommonForm from "./CommonForm";
import {connect} from "react-redux";
import * as actions from "../actions/vehicle";


const  styles = theme => ({
    root:{
        '& .MuiTextField-root': {
            margin:theme.spacing(1),
            minWidth : 230
        }
    },

    smMargin:{
        margin:theme.spacing(1),
    }
})


const initialFieldValues = {
    year : '',
    make:'',
    mode:''
}

const VehicleForm = ({classes,...props}) => {

    const validate =()=> {
        let temp={}
        temp.make=values.make?"":" This field is required."
        temp.model=values.model?"":" This field is required."
        temp.year=(/^[0-9]{4}$/).test(values.year)?"":"Year is required and should only be in numbers."

        setErrors({
            ...temp
        })

        return Object.values(temp).every(x=>x=="")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = CommonForm(initialFieldValues)

    const handleSubmit=e=>{
        e.preventDefault()
        if(validate()){
            props.createVehicle(values,() => {window.alert('Record is Inserted.')})

        }
    }

    return (
        <form autoComplete="off" className = {classes.root} noValidate onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs ={6}>
                    <TextField 
                        name="year"
                        variant="outlined"
                        label="Year"
                        value={values.year}
                        onChange={handleInputChange}
                        error={true}
                        helperText={errors.year}
                    />
                    <TextField 
                        name="make"
                        variant="outlined"
                        label="Make"
                        value={values.make}
                        onChange={handleInputChange}
                        error={true}
                        helperText={errors.make}
                    />
                    <TextField 
                        name="model"
                        variant="outlined"
                        label="Model"
                        value={values.model}
                        onChange={handleInputChange}
                        error={true}
                        helperText={errors.model}
                    />
                    <div>
                        <Button
                            variant = "contained"
                            color="primary"
                            type="submit"
                            className={classes.smMargin}>
                                SUBMIT
                        </Button>
                        <Button
                            variant = "contained"
                            className={classes.smMargin}>
                                RESET
                        </Button>


                    </div>
                </Grid>
                <Grid item xs={6}></Grid>
            </Grid>
        </form>
    )
}


const mapStateToProps = state => ({
    vehicleList:state.vehicle.list
})

const mapActionToProps = {
    createVehicle : actions.create,
    updateVehicle : actions.update
}
export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(VehicleForm));