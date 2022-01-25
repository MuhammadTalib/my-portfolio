import React from "react";
import "./App.css";       
import SideBar from "./Components/sidebar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./Components/about";
import Projects from "./Components/projects";
import ContactMe from "./Components/contactme";
function App() {
  
  return (
    <BrowserRouter>
      <SideBar />
      <Switch>
        {/* <Route path="/home" component={Home}></Route> */}
        <Route path="/" component={About}></Route>
        <Route path="/my-portfolio/projects" component={Projects}></Route>
        <Route path="/my-portfolio/contactme" component={ContactMe}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
