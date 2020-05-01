import React from 'react';
import Header from './core/header/Header';
import Home from './core/home/wrapper/Home';
import Contact from './core/contact/Contact';
import Footer from './core/footer/footer';

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
