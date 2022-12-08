import React from 'react'
import "./form-input.styles.scss"
const FormInput = ({label, ...formProperties }) => {

  return (
    <div className='group'>
        <input {...formProperties} className="form-input" />
        {
            label && (
            <label className={`${formProperties.value.length > 0 ? "shrink" : ""} form-input-label`}>
                {label}
            </label>
            )
        }
        
    </div>
  )
}

export default FormInput