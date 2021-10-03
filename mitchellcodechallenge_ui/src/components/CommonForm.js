import React,{useState,useEffect} from "react";

const CommonForm = (initialFieldValues) =>{
    const [values,setValues] = useState(initialFieldValues)
    const [errors,setErrors] = useState({})

    const handleInputChange = e => {
        const {name,value} = e.target
        setValues({
            ...values,
            [name] : value
        })
    }
    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    };
}

export default CommonForm;