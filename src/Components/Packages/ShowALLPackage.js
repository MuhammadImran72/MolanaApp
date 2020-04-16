import React from "react";
import Header from "../Header/Header";
import Package from "./Package";
import "../../assets/css/ShowAllPackage.css";
import Footer from "../Footer/Footer";

class ShowAllPackage extends React.Component {
  render() {
    return (
      <div>
        <div className="showpackageshead">
          <Header></Header>
          <div className="showpackagebanner">
            <div className="showmidle">
              <h2>Details oF All Package'S</h2>
            </div>
          </div>
        </div>
        <Package></Package>

        <Footer></Footer>
      </div>
    );
  }
}

export default ShowAllPackage;
