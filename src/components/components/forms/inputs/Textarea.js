import React from "react";

const Textarea = ({ label, name, rows, onChange, value }) => {
    return(
        <>
            <label htmlFor={name}>{label}</label>
            <textarea className="w-100 bg-none" id={name} name={name} onChange={onChange} value={value} rows={rows}/>
        </>
    )
}

export default Textarea;