import React from "react";

const Text = ({ label, name, onChange, value }) => {
    return(
        <>
            <label htmlFor={name}>{label}</label>
            <input id={name} name={name} type="text" onChange={onChange} value={value}/>
        </>
    )
}

export default Text;