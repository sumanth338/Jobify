import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <div>
        <div>navbar</div>
      <Outlet />
    </div>
  )
}

export default HomeLayout