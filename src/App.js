import React from 'react';
import './styles/css/theme.css';
import './resources/css/styles.css'
import Page from './components/viewComponents/Page'
import Home from './pages/home'
import Login from './pages/users/userLogin'
import {Switch, Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    
    <BrowserRouter>
    <Switch>
      <Route path="/" exact ><Page/></Route>
      <Route path="/home" exact ><Home ></Home></Route>
      <Route path="/login" exact ><Login></Login></Route>

    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
