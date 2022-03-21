import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar'
import Home from './components/Home';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Home />
    </React.Fragment>
  );
}

export default App;