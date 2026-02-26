import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar'
import { FaTimes } from 'react-icons/fa'
import Logo from './Logo'
import links from '../utils/links'
import { NavLink } from 'react-router-dom'
import { useDashboardContext } from '../pages/DashboardLayout'
import Navlinks from './Navlinks'
// import { useDashboardContext } from '../pages/DashboardLayout'

const SmallSidebar = () => {
    // const data = useDashboardContext();
    // console.log(data)
    const {showSidebar, toggleSidebar} = useDashboardContext()
  return (
    <Wrapper>
      <div className={showSidebar ? "sidebar-container show-sidebar" :"sidebar-container"}>
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar} >
            <FaTimes/>
          </button>
          <header>
            <Logo/>
          </header>
        <Navlinks/>
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar