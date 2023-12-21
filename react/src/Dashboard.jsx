import { useState } from 'react'
import dashboard from './assets/dashboard.jpg';
function Dashboard() {

  return (
    <>
    <div>
        <h1>Dashboard</h1>
      </div>
      <div className='box'>
        <img src={dashboard}  />
      </div>
    </>
  )
}

export default Dashboard
