import { Button, Grid, TextField,withStyles } from "@material-ui/core";
import React,{useEffect, useState} from "react";
import CommonForm from "./CommonForm";
import {connect} from "react-redux";
import * as actions from "../actions/vehicle";
import { useToasts } from "react-toast-notifications";


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

    //toast messages
    const { addToast } = useToasts()

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
        handleInputChange,
        resetForm
    } = CommonForm(initialFieldValues,validate,props.setCurrentId)

    const handleSubmit=e=>{
        e.preventDefault()
        if(validate()){
            const onSuccess = () => {        
                resetForm()
                addToast("Submitted Successfully",{appearance:'success'})
            }
            if(props.currentId==0)
                props.createVehicle(values,onSuccess)
            else
                props.updateVehicle(props.currentId,onSuccess)
        }

    }

    useEffect(() => {
        if (props.currentId !=0)
        setValues({
            ...props.vehicleList.find(x=>x.id==props.currentId)
        })
        setErrors({})
    })

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
                            className={classes.smMargin}
                            onClick={resetForm}>
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