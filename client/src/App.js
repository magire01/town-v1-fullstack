import React, { useState } from 'react';
import './App.css';

import Home from "./pages/Home";


const App = () => {

  const [userAuth, setUserAuth] = useState({
    authed: false
  })

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
