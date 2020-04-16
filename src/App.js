import React from "react";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import "./assets/css/Banner.css";
import Package from "./Components/Packages/Package";
import { Switch, Route } from "react-router-dom";
import ShowAllPackage from "./Components/Packages/ShowALLPackage";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import Footer from "./Components/Footer/Footer";
import MoreService from "./Components/Service/MoreServices";
import SinglePackage from "./Components/Packages/SinglePackage";
import MakkahPackage from "./Components/Packages/MakkahPackage";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact>
          <div className="mainhead">
            <Header></Header>
            <Banner></Banner>
          </div>
          <Service></Service>
          <MoreService></MoreService>
          <Package></Package>
          <Footer></Footer>
        </Route>

        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/singlepackage">
          <SinglePackage></SinglePackage>
        </Route>

        <Route path="/makahpackage">
          <MakkahPackage></MakkahPackage>
        </Route>
        <Route path="/showallpackages">
          <ShowAllPackage></ShowAllPackage>
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
