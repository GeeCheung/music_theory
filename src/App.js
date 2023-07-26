import React from 'react';
import { Route, Routes } from "react-router-dom";
import Account from './components/pages/Account.jsx';
import ProtectedRoute from './components/pages/ProtectedRoute.js';
import Signin from './components/pages/Signin.jsx';
import Signup from './components/pages/Signup.jsx';
import { AuthContextProvider } from './context/AuthContext';

const App = () => {

  return ( 
    <div>
        <h1 className='contentDiv'style={{color: "#cc0000"}}>
        Music Theory
      </h1>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;