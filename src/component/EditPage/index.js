import React,{useEffect,useContext,useState} from 'react';
import TextInput from '../TextInput';
import Button from '../Button';
import {UserContext} from '../../context';
import {useParams,useHistory} from 'react-router-dom';
import {ValidateForm} from '../../validation';
const EditPage = () => {
    const {validation,err} = ValidateForm()
    const [inputdata,setData] = useState({
        id: null,
        Name: "",
        Artist: "",
        Length: ""
    });
    const history = useHistory();
    const handlechange = (value,name) => {
        setData({...inputdata,[name]:value});
        console.log(inputdata);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(validation(inputdata)){
            edittrack(inputdata);
            history.push('/');
        }
        
    }
    const {data,edittrack} = useContext(UserContext);
    const {id} = useParams()
    useEffect(()=> {
      const editdata =  data.filter((val)=>val.id == id);
      setData(editdata[0]);
    },[]);
    return<>
    <div className="todo_container">
        <div className="todo_align">
            <h4>Edit Track</h4>
            <form onSubmit={handleSubmit}>
                <TextInput title="Name" onChange={handlechange}  value={inputdata.Name}/>
                <span className="err-msg">{err.Name}</span>
                <TextInput title="Artist" onChange={handlechange} value={inputdata.Artist}/>
                <span className="err-msg">{err.Artist}</span>
                <TextInput type="number" title="Length" onChange={handlechange} value={inputdata.Length}/>
                <span className="err-msg">{err.Length}</span>
                <div className="d-flex">
                    <Button type="submit" varient="primary_btn mx-auto" label="SAVE" />
                    <Button type="submit" onClick={() => history.push('/')} varient="primary_btn mx-auto" label="CANCEL" />
                </div>
            </form>
        </div>
    </div>
    </>
}


export default EditPage