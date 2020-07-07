import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import "./App.css";
import Navbar from "./components/Navbar"
// import Jumbotron from "./components/Jumbotron";
// import Wrapper from "./components/Wrapper";

function App() {
  return (
    <>
    <Router>
      <Navbar />

      <Route exact path= "/" component={Search}></Route>
      <Route exact path= "/saved" component={Saved}></Route>


    </Router>
    </>
  );
}


export default App;
