import React from "react";
import "../../assets/css/Service.css";
import { Link } from "react-router-dom";

function Service() {
  return (
    <div className="services">
      <div className="container p-5">
        <div className="row">
          <div className=" col-lg-12 col-md-12 col-sm-12 serviceheading text-center">
            <h2> مشہور مقدس مقامات</h2>
            <p>ہم ہمیشہ ان مقدس مقام کی زیارت کرتے ہیں</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 pb-5">
            <div className="card  text-white">
              <img
                className="card-img cover"
                src={require("../../assets/img/kaba.jpg")}
                alt="Card image"
              />

              <div className="center ">
                <Link className="servicebtn"> حج-عمرہ</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="card  text-white">
              <img
                className="card-img cover"
                src={require("../../assets/img/service.jpg")}
                alt="Card image"
              />

              <div className="center">
                <Link className="servicebtn">ایران-عراق-شام</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
