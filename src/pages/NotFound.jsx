import React from 'react'
import error from '../images/error.png'

function NotFound() {
  return (
    <div className='error'>
      <img src={error} alt="404-error" className="error__image" />
      <h2 className="error__title">This page doesn't exist</h2>
    </div>
  )
}

export default NotFound