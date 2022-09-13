import React from 'react'
import './button.styles.scss'

function Button({children,buttonType, ...otherProps}) {

const buttonTypes = {
google:'google-sign-in',
inverted: 'inverted'

}
  return (
   <button className={`button-container ${buttonTypes[buttonType]}`} {...otherProps}>{children}</button>
  )
}

export default Button