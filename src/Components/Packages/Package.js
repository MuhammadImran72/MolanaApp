import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Package.css";
class Package extends React.Component {
  render() {
    return (
      <div>
        <div className="packagess">
          <div className="container p-3">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12 p-2  packagesheadingbtn">
                <Link className="showme" to="showallpackages">
                  تمام پیکجز
                </Link>
              </div>

              <div className="col-lg-8 col-md-12 col-sm-12 p-2 ">
                <h2>ہم سستی پیکیج فراہم کرتے ہیں</h2>
              </div>
            </div>

            <br></br>
            <br></br>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="packagebox">
                  <img
                    className=" imagescover"
                    src={require("../../assets/img/muhamra.jpg")}
                    alt="cap"
                  />

                  <h5>چہلم امام حسین علیہ السلام</h5>
                  <p>
                    ایران و عراق روانگی اسلام آباد 12یا 13 صفر نجف اشرف روانگی
                    مشی 16 صفر بزرگ زاہیرین کیلئے گاڑیوں کا بندوبست ہوتا ہے
                    کربلا شب اربعین
                  </p>

                  <p>پیکیج :190000</p>
                </div>
                <div className=" btncenter">
                  <Link className="packagbtn" to="singlepackage">
                    مزید تفصیلات
                  </Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="packagebox">
                  <img
                    className=" imagescover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzX7l_G1RA-MvRpEWV2CsCK4lhHv3er-4bbXaX4nmelqLX9ebx&usqp=CAU"
                    alt="cap"
                  />

                  <h5>عمیرہ / ایران / عراق</h5>
                  <p>
                    13 رجب حرم امیرالمومنین حضرت علی علیہ السلام 10 دن عراق میں
                    پھر عراق سے بائےایر شام 4 دن پھر شام سے بائے ایر ایران 9 دن
                    پھر مشھد سے اسلام آباد
                  </p>
                </div>
                <div className=" btncenter">
                  <Link className="packagbtn" to="singlepackage">
                    مزید تفصیلات
                  </Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="packagebox">
                  <img
                    className="imagescover"
                    src={require("../../assets/img/rajab.jpg")}
                    alt="cap"
                  />

                  <h5>روانگی رجب المرجب</h5>
                  <p>
                    چشمہ عین الحسن علیہ السلام نجف سے 60کلو میٹر دور قادسیہ شہر
                    میں ہے ۔ اس چشمہ کا پانی کینسر اور باقی ہر مرض کی شفا ہے۔
                  </p>

                  <p>
                    13 رجب حرم امیرالمومنین حضرت علی علیہ السلام 10 دن عراق میں
                    پھر عراق سے بائےایر شام 4 دن پھر شام سے بائے ایر ایران 9 دن
                    پھر مشھد سے اسلام آباد
                  </p>
                </div>
                <div className=" btncenter">
                  <Link className="packagbtn" to="singlepackage">
                    مزید تفصیلات
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Package;
