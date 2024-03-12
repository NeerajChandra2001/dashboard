import React from 'react'
import Signup from './components/Signup/Signup'
import Navbar from './components/Navbar/Navbar'
import SideNav from './components/SideNavbar/SideNav'
import Project from './components/Pages/Projectss/Project'
import Modal from './components/Modal/Modal'

const App = () => {
  return (
    <div className=''>
      {/* <Signup/> */}
      <Navbar />
      <Project />
      {/* <Modal/> */}
    </div>
  )
}

export default App