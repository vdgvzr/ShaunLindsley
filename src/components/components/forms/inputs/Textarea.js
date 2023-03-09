import React from "react";

const Textarea = ({ label, name, rows, onChange, value, required }) => {
    return(
        <>
            <label className="mb-2" htmlFor={name}>{label}</label>
            <textarea className="default-input w-100 bg-none" id={name} name={name} onChange={onChange} value={value} rows={rows} required={required}/>
        </>
    )
}

export default Textarea;