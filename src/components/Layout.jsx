import React from 'react'
import Navs from './Navs'
import {Outlet} from 'react-router-dom'
function Layout() {
  return (
    <div>
        <Navs />
        <Outlet />
    </div>
  )
}

export default Layout