import React from "react";
import Header from "../Header/Header";
import "../../assets/css/SinglePackage.css";

class MakkahPackage extends React.Component {
  render() {
    return (
      <div>
        <div className="singlepackageshead">
          <Header></Header>
          <div className="showpackagebanner">
            <div className="showmidle">
              <h2>Details oF All Makkah And Madina Ziyarat</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MakkahPackage;
