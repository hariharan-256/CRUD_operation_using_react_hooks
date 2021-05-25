import React from 'react';
import './sytle.scss';

const Button = (props) => {
    const{varient,label,onClick} = props;
    return<>
        <button className={varient} onClick={onClick}>{label}</button>
    </>
}


export default Button