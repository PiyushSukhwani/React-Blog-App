import React from 'react'
import Profile from './Components/Profile'
import Login from './Components/Login'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  
  return (
    <UserContextProvider>
      <h1>React Learning...</h1>
      <Login />
      <Profile/>
    </UserContextProvider>
  );
}

export default App
