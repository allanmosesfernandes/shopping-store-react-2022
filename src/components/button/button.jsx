import React from 'react'

const Button = (props) => {

    const {type, text, buttonType} = props;
    
    const styling = {
        google: "google-sign-in",
        inverted: "inverted",
        normal: ""
    }
  return (
    <button 
        type={type}
        className={`button-container ${styling[buttonType]}`}>
        {`${text}`}
    </button>
  )
}

export default Button