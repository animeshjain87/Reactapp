import React from 'react';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
//import DataList from './components/DataList';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
   <Router>
    <div className="App">   

    <Route exact path="/" component={Login}>   
      <Login label="My App" username="Username" passwordlabel="Password" forgottext="Forgot password?" btnname="Sign in" />     
    </Route>

      <Route path="/dashboard" component={Dashboard}>
        <Dashboard/> 
      </Route>     
      
    </div>
   </Router>
  );
}

export default App;
