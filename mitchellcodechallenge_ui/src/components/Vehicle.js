import { connect } from "react-redux";
import * as actions from "../actions/vehicle";
import React,{useState,useEffect} from "react";

const Vehicle = (props) => {
    // const[x,setX] = useState(0)
    // setX(5)
    useEffect(()=>{
        props.fetchAllVehicles()
    },[])

    return (<div>from Vehicle component</div>)
}

const mapStateToProps = state => ({
        vehicleList:state.vehicle.list
    })

const mapActionToProps = {
    fetchAllVehicles : actions.fetchAll
}


export default connect(mapStateToProps,mapActionToProps)(Vehicle);