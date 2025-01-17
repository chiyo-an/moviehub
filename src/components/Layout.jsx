import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import React from 'react'

const Layout = () => {
  return (
    <>
      <NavBar />
      <main className="pt-20 px-4">
        <Outlet />
      </main>
    </>
  )
}

export default Layout