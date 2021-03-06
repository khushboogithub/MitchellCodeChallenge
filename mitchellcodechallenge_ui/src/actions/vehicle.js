import { combineReducers } from "redux"
import api from "./api"

export const ACTION_TYPES={
    CREATE:'CREATE',
    UPDATE:'UPDATE',
    DELETE : 'DELETE' ,
    FETCH_ALL : 'FETCH_ALL'
}

export const fetchAll = () => dispatch => {

    api.vehicle().fetchAll()
    .then(
        response => {
            console.log(response);
            dispatch({
                type:ACTION_TYPES.FETCH_ALL,
                payload : response.data
            })
        }
    )
    .catch(err => console.log(err))
  
}

const formatData = data => ({

    ...data,
    year:parseInt(data.year?data.year:0)

})

export const create = (data,onSuccess) => dispatch => {
    //console.log(data)

    data.year= data.year.toString().split(" ")[3]
    data=formatData(data)
    api.vehicle().create(data)
    .then(res=>{
        dispatch({
            type:ACTION_TYPES.CREATE,
            payload:res.data
        })
        onSuccess()
    })
    .catch(err => console.log(err))
}

export const update = (id,data,onSuccess) => dispatch => {
    data.year= data.year.toString().split(" ")[3]

    data=formatData(data)
    api.vehicle().update(id,data)
    .then(res=>{
        dispatch({
            type:ACTION_TYPES.UPDATE,
            payload:{id,...data}
        })
        onSuccess()
    })
    .catch(err => console.log(err))
}

export const deleteRecord = (id,onSuccess) => dispatch => {
    api.vehicle().delete(id)
    .then(res=>{
        dispatch({
            type:ACTION_TYPES.DELETE,
            payload:id
        })
        onSuccess()
    })
    .catch(err => console.log(err))
}