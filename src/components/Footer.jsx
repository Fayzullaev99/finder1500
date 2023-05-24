import React from 'react'
import { FaGithub } from 'react-icons/fa'

function Footer() {
  let fullYear = new Date().getFullYear()
  return (
    <footer className='footer'>
      <FaGithub />
      <p className="footer__text">Copyright &copy; {fullYear} All rights</p>
    </footer>
  )
}

export default Footer