import React from 'react'
import Wrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/images/not-found.svg'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <Wrapper>
      <div>
        <img src={img} alt='not found'/>
        <h3>Ohh! page not found</h3>
        <Link to='/dashboard'>back home</Link>
      </div>
    </Wrapper>
  )
}

export default Error
