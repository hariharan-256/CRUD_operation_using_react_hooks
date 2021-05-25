import React,{useContext} from 'react';
import './style.scss';
import {Link, useHistory} from 'react-router-dom';
import Button from '../Button/index';
import {UserContext} from '../../context';

const Dashboard = (props) => {
    const {data,deletetrack} = useContext(UserContext);
    const history = useHistory()
    console.log("table data",data);
    const deleteClick = (id,name) => {
      const del = window.confirm(`Are you sure delete this "${name}"`);
      if (del) {
          deletetrack(id);
      }
    }
    const editClick = (id) => {
        history.push(`/edit/${id}`)
    }
    return<>
        <div className="container todo_container fluid">
            <div className="d-flex w-100 justify-content-end mb-3">
                <Link to="/add">
                    <Button varient="primary_btn" label="Add Track" />
                </Link>
            </div>
            <div className="table-responsive">
                <table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Track</th>
                            <th>Artist</th>
                            <th>Length</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((val)=><tr key={val.id}>
                        <td>{val.Name}</td>
                            <td>{val.Artist}</td>
                            <td>{val.Length}</td>
                            <td><div className="d-flex"><Button varient="primary_btn mr-5" onClick={() => editClick(val.id)} label="Edit"/><Button onClick={()=> deleteClick(val.id,val.Name)} varient="primary_btn" label="Delete"/></div></td>
                        </tr>
                        )} 
                    </tbody>
                </table>
            </div>
            {data.length>0?'':<div className="text-center mt-4">
                <p>No dada</p>
            </div>}
        </div>
    </>
}

export default Dashboard