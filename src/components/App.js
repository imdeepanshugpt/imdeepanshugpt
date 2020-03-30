import React from 'react';
import Header from './core/header/Header';
import Home from './core/home/hoc/Home';
import Contact from './core/contact/Contact';

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Contact></Contact>
    </div>
  );
}

export default App;
