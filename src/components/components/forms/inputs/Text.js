import React from "react";

const Text = ({ label, name, onChange, value }) => {
    return(
        <>
            <label htmlFor={name}>{label}</label>
            <input className="w-100" id={name} name={name} type="text" onChange={onChange} value={value}/>
        </>
    )
}

export default Text;