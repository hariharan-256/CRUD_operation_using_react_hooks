import React,{useState,useContext} from 'react';
import {useHistory} from 'react-router-dom'
import TextInput from '../TextInput';
import Button from '../Button';
import {UserContext} from '../../context';
import {ValidateForm} from '../../validation';

const Form = (props) => {
    const {validation,err} = ValidateForm()
    const {addtrack,data} = useContext(UserContext);

    const [inputdata,setData] = useState({
        id: data.length+1,
        Name: "",
        Artist: "",
        Length: ""
    });
    const history = useHistory()
    const handlechange = (value,name) => {
        setData({...inputdata,[name]:value});
        console.log(inputdata);
    }
    
    
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("input data",inputdata)
        if(validation(inputdata)){
            addtrack(inputdata);
            history.push('/');
        }

    }

    console.log(inputdata)
    return<>
        <div className="todo_align">
            <h4>Create Track</h4>
            <form onSubmit={(event) => handleSubmit(event)}>
                <TextInput onChange={handlechange} title="Name"/>
                <span className="err-msg">{err.Name}</span>
                <TextInput ty onChange={handlechange} title="Artist"/>
                <span className="err-msg">{err.Artist}</span>
                <TextInput type="number" step=".01" onChange={handlechange} title="Length"/>
                <span className="err-msg">{err.Length}</span>
                <Button type="submit" varient="primary_btn mx-auto" label="Submit" />
            </form>
        </div>
    </>
}


export default Form