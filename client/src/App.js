import './App.css';
import { BrowserRouter as Router } from "react-router-dom"
import Navbar from './components/Navbar'
import React, { useState } from "react"
import UnauthenticatedApp from './components/UnauthenticatedApp';
import AuthenticatedApp from './components/AuthenticatedApp';

function App() {
  const [userData, setUserData] = useState(null);
  return (
    <Router>
      <Navbar />
      {userData === null ? <UnauthenticatedApp setUser={setUserData}/> : <AuthenticatedApp />}
    </Router>
  );
}

export default App;
