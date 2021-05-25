import React,{useState} from 'react';

export const ValidateForm = () => {
    const [err,setErr] =useState({
        Name:"",
        Artist:"",
        Length:""
    });
    const validation = (data) => {
        let valid = true
        const error = {}
        if(data.Name==""){
            valid = false
            error["Name"] = "Name is required"
        }
        if(data.Artist==""){
            valid = false
            error["Artist"] = "Artist is required"
        }
        if(data.Length==""){
            valid = false
            error["Length"] = "Length is required"
        }
        if(data.Length.indexOf(".") == -1){
            valid = false
            error["Length"] = "float value is required"
        }
        setErr(error)
        return valid
    }
    return{
        validation,
        err
    }
}
