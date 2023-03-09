import React from "react";

const Email = ({ label, name, onChange, value }) => {
    return(
        <>
            <label htmlFor={name}>{label}</label>
            <input id={name} name={name} type="email" onChange={onChange} value={value}/>
        </>
    )
}

export default Email;