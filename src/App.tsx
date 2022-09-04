import React from 'react';
import './App.css';
import HomePage from "./components/Homepage/HomePage";
import {Route, Switch} from "react-router"
import {BrowserRouter} from "react-router-dom"
import StyledComponent from "./App.styled";

function App() {
  return (
      <StyledComponent>
        <div className="App">
          <BrowserRouter>
            <div className='page'>
                <Switch>
                  <Route path={'/'} component={HomePage}/>
                </Switch>
            </div>
          </BrowserRouter>
        </div>
      </StyledComponent>
  );
}

export default App;
