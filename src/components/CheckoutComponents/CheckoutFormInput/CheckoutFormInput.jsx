import React from "react";

function Input({children: texto, name, type, value, onChange}) {
  return(
    <div className="row mb-4 g-3">
      <div className="col">
        <label htmlFor={name} className="form-label">{texto}</label>
        <input
          type={type}
          id={name}
          name={name}
          placeholder={`Escribe tu ${texto}`}
          onChange={onChange}
          value={value}
          required
          className="form-control"
        />
      </div>
    </div>
  )
}

export default Input;