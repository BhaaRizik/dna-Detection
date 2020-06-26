import React, { Fragment } from 'react'
import '../index.css'
import './comp.css'
import logo from './ZPJ-Logo.jpg'

function About () {
  return (
    <Fragment>
      <img className='logo' src={logo} alt='Logo' />
    </Fragment>
  )
}

export default About
