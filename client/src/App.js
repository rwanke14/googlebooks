import React from 'react'
import { BrowserRouter, Route, Switch  } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navbar";
import Saved from "./pages/savedbooks"
import Hero from "./components/Hero"
import Search from "./pages/searchbooks"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Hero />
        <Switch>
        <Route exact path="/search" component={Search}/>
        <Route exact path="/save" component={Saved}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
