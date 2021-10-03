import { connect } from "react-redux";
import * as actions from "../actions/vehicle";
import React,{useState,useEffect} from "react";
import { Grid,Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,withStyles } from "@material-ui/core";
import VehicleForm from "./VehicleForm";

const styles=theme => ({
    root:{
        "& .MuiTableCell-head" : {
            fontSize:"1.25rem"
        }
    },

    paper: {
        margin:theme.spacing(2),
        padding : theme.spacing(2)
    }
})

const Vehicle = ({classes,...props}) => {
    // const[x,setX] = useState(0)
    // setX(5)
    useEffect(()=>{
        props.fetchAllVehicles()
    },[])

    return (
        <Paper className={classes.paper} elevation={3}>
            <Grid container>
                <Grid item xs={6}>
                    <VehicleForm />
                </Grid>
                <Grid item xs={6}>
                    <TableContainer>
                        <Table>
                            <TableHead className={classes.root}>
                                <TableRow>
                                    <TableCell>Year  </TableCell>
                                    <TableCell>Make  </TableCell>
                                    <TableCell>Model </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.vehicleList.map((record,index) => {
                                        return(
                                            <TableRow key={index} hover>
                                                <TableCell>{record.year}</TableCell>
                                                <TableCell>{record.make}</TableCell>
                                                <TableCell>{record.model}</TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
    )
}

const mapStateToProps = state => ({
        vehicleList:state.vehicle.list
    })

const mapActionToProps = {
    fetchAllVehicles : actions.fetchAll
}


export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(Vehicle));