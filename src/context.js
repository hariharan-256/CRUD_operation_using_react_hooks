import React,{useReducer,createContext} from 'react';
import Reducer from './reducer';

const initialState = []

export const UserContext = createContext();



export const UserProvider = ({children}) => {
    const [data,dispatch] = useReducer(Reducer,initialState);

    const addtrack = (datas) => {
        return dispatch({type:"ADD_TRACK",payload: datas});
    }
    const edittrack = (datas) => {
        return dispatch({type:"EDIT_TRACK",payload: datas});
    }
    const deletetrack = (datas) => {
        return dispatch({type:"DELETE_TRACK",payload: datas});
    }
    return(
        <UserContext.Provider
        value={{addtrack,data,deletetrack,edittrack}}
        >{
            children}
        </UserContext.Provider>
    )
}

