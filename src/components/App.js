import React from 'react';
import Header from './core/header/Header';
import Home from './core/home/wrapper/Home';
import Footer from './core/footer/footer';
import PageNotFound from './page-not-found/PageNotFound';
import { Router, Route } from 'react-router-dom';
import history from './history';
import Projects from './project/project';

const App = () => {
  return (
    <Router history={history} >
      <div className="App">
        <Header></Header>
        <div style={{ paddingTop: '60px' }}>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/404" component={PageNotFound} />
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
