import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginComponent from './compenets/Login';
import SignupComponent from './compenets/Siginup';
import ProfilePage from './compenets/Profile';
import Chat from './compenets/Chat';

const App = () => {
  return (
    
      <div>
        <Routes>
          <Route path='/' element={<SignupComponent />} />
          <Route path='/login' element={<LoginComponent />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/chat' element={<Chat/>} />
        </Routes>
      </div>
    
  );
}

export default App;
