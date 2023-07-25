import React from 'react';
import { Route, Routes } from "react-router-dom";
import Account from './components/pages/Account.jsx';
import Signin from './components/pages/Signin.jsx';
import Signup from './components/pages/Signup.jsx';

const App = () => {

  return ( 
    <div>
        <h1 className='contentDiv'>
        Music Theory
      </h1>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
      </Routes>
  
    </div>
  );
}

export default App;