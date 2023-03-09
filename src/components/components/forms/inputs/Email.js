import React from "react";

const Email = ({ label, name, onChange, value, required }) => {
    return(
        <>
            <label className="mb-2" htmlFor={name}>{label}</label>
            <input className="default-input w-100" id={name} name={name} type="email" onChange={onChange} value={value} required={required}/>
        </>
    )
}

export default Email;