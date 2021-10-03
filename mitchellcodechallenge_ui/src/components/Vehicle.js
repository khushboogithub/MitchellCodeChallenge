import { connect } from "react-redux";
import * as actions from "../actions/vehicle";
import React,{useState,useEffect} from "react";
import { Grid,Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,withStyles } from "@material-ui/core";
import VehicleForm from "./VehicleForm";
import EditIcon from "@material-ui/EditIcon"
import DeleteIcon from "@material-ui/DeleteIcon"
import { useToasts } from "react-toast-notifications";



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
    
    const [currentId,setCurrentId] = useState(0)

    useEffect(()=>{
        props.fetchAllVehicles()
    },[])

    //toast messages
    const { addToast } = useToasts()

    const onDelete = id => {
        if (window.confirm("Are you sure to delete this record?"))
            props.deleteVehicle(id,()=> addToast("Deleted Successfully", {appearance :'info'}))
    }

    return (
        <Paper className={classes.paper} elevation={3}>
            <Grid container>
                <Grid item xs={6}>
                    <VehicleForm {...({currentId,setCurrentId})}/>
                </Grid>
                <Grid item xs={6}>
                    <TableContainer>
                        <Table>
                            <TableHead className={classes.root}>
                                <TableRow>
                                    <TableCell>Year  </TableCell>
                                    <TableCell>Make  </TableCell>
                                    <TableCell>Model </TableCell>
                                    <TableCell></TableCell>
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
                                                <TableCell>
                                                    <ButtonGroup variant="text">
                                                        <Button>
                                                            <EditIcon color="primary" onClick={()=>{setCurrentId(record.id)}}/>    
                                                        </Button>
                                                        <Button>
                                                            <DeleteIcon 
                                                            color="secondary"
                                                            onClick={() => OfflineAudioCompletionEvent(record.id)} />
                                                        </Button>
                                                    </ButtonGroup>
                                                </TableCell>
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
    fetchAllVehicles : actions.fetchAll,
    deleteVehicle : actions.deleteRecord
}


export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(Vehicle));