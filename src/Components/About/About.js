import React from "react";
import Header from "../Header/Header";
import "../../assets/css/About.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <div className="abouthead">
        <Header></Header>
        <div className="showpackagebanner">
          <div className="showmidle">
            <h2>خود کے بارے میں</h2>
          </div>
        </div>
      </div>

      <div className="container p-5">
        <div className="infoheading">
          <h2 className="text-center"> مولانا عامر عباس</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 ">
            <img
              className="coverimage"
              src={require("../../assets/img/amir4.jpg")}
            />
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8 info">
            <h5> میرا نفس</h5>
            <p>
              میرا نام عامر عباس ہے میں سن2000 میں علوم آل محمد کو حاصل کرنے
              کیلئے سر زمین ایران میں گیا یہاں آکر میں نے یونیورسٹی جامعہ
              المصطفی العالمیہ میں دخلہ لیا اور اپنی پڑھائی کا آغاز کیا. اور 7
              سال میں بچلرل کی دگری حاصل کی.اور 7 سال کے عرصے میں 2 فارسی زبان
              میں کتابیں لکھیں اور اردو زبان میں متعدد کتابیں لکھیں.
            </p>

            <h6> تعلیم</h6>
            <p>
              مولانا محمد عباس نے ایران کے علاء بین الاقوامی یونیورسٹی سے بیچلور
              ڈگری مکمل کی۔ .
            </p>
          </div>
        </div>
      </div>

      <div className="container p-5">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 bookheading">
            <h2 className="text-center"> کتابیں </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 offset-2 col-md-4  col-sm-4 bookbigbox ">
            <img
              className="morecover"
              src={require("../../assets/img/amir2.jpg")}
              alt="Card image cap"
            />
            <h5>شیعہ از نگاہ امام جعفر صادق علیہ السلام</h5>
            <h5>برسیی مزار ھای اولیاء اللہ در پاکستان</h5>

            <p className="bold"> اس نمبر پر کتاب خریدنے کے لئے رابطہ کریں</p>
            <p className="bold">0336 0552085</p>
          </div>

          <div className="col-lg-4  col-md-4  col-sm-4 bookbigbox ">
            <img
              className="morecover"
              src={require("../../assets/img/amir1.jpg")}
              alt="Card image cap"
            />

            <h5>
              شیعہ امام جعفر صادق علیہ السلام کی نگاہ میں زندگی امیرالمومنین
              خانہ کعبہ سے لے کر مسجد کوفہ تک
            </h5>
            <h5>
              لقابات امام زمان علیہ السلام حضرت محسن بن فاطمہ سلام اللہ علیھا
            </h5>

            <p className="bold"> اس نمبر پر کتاب خریدنے کے لئے رابطہ کریں</p>
            <p className="bold">0336 0552085</p>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
export default About;
