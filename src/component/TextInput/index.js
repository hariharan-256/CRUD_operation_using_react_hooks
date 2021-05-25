import React from 'react';
import './style.scss'

const TextInput = (props) => {
    const {title,onChange,value,type,step} = props;
    return<>
        <input type={type} step={step} name={title} value={value} placeholder={title} onChange={(event)=> onChange(event.target.value,event.target.name)} />
    </>
}

export default TextInput