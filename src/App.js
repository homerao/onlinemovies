import React from 'react';
import './styles/css/theme.css';
import Page from './components/viewComponents/Page'
import Home from './pages/home'
import {Switch, Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    
    <BrowserRouter>
    <Switch>
      <Route path="/" exact ><Page/></Route>
      <Route path="/home" exact ><Home ></Home></Route>

    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
