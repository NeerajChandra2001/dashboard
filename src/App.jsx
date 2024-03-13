import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Project from './components/Pages/Projectss/Project';
// import Timeline from './components/Timeline/Timeline';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className=''>
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/Home" element={<Project />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
