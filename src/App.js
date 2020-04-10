import React from 'react';
// import logo from './logo.svg';
// import Parent from './Components/Parent'
// import ClickCounter from './Components/ClickCounter'
// import HoverCounter from './Components/HoverCounter'
// import ClickCounterTwo from './Components/ClickCounterTwo'
import ComponentA from './Components/ComponentA'
import './App.css';
import { UserProvider } from './Components/userContext';
// import {UserProvider} from './Components/userContext'

function App() {
  return (
    <div className="App">
      <UserProvider value="Dhairya">
      <ComponentA />
      </UserProvider>
      
      {/* <ClickCounterTwo /> */}
      {/* <ClickCounter name='dhairya' /> */}

      {/* <HoverCounter /> */}
      {/* <Parent /> */}
     
    </div>
  );
}

export default App;
