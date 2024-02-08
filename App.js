import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className='container'>
        <h1>Hello world this text is in the app.js</h1>
        <nav className='nav'>
          <Link to="component1" className='nav-link'>Component1</Link>
          <Link to="component2" className='nav-link'>Component2</Link>
        </nav>
        <div className='content'>
          <Routes>
            <Route path='/component1' element={<Component1/>}/>
            <Route path='/component2' element={<Component2/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
