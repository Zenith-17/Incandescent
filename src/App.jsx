import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Footer from './components/Footer';
const App = () => {
  return (
    
    
    <div className='container'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blog/:id' component={Blog} />
        <Redirect to='/' />
      </Switch>
      <Footer/>
    </div>
    
  );
};

export default App;
