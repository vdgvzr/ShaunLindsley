import React from "react";

const Email = ({ label, name, onChange, value }) => {
    return(
        <>
            <label htmlFor={name}>{label}</label>
            <input className="w-100" id={name} name={name} type="email" onChange={onChange} value={value}/>
        </>
    )
}

export default Email;