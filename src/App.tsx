import React from 'react'
import './styles.css'
import { Outlet } from 'react-router-dom'

export const App = () => {
  return (
    <>
      <Outlet />
    </>
  )
}
