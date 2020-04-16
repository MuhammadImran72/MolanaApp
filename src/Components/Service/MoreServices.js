import React from "react";

function MoreService() {
  return (
    <div>
      <div className="backcoverofmoreservice">
        <div className="container p-5">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 moreserviceheading">
              <h2>دوسرے مسائل جن سے ہم سب کی مدد کرسکتے ہیں</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="box">
                <img
                  className="morecover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQx5Ly2QuWSx3zhyErHftcNehhlcIKowVJt9lgc3VICtBQ30RjV&usqp=CAU"
                  alt="Card image cap"
                />

                <h5>ہوٹل </h5>
                <p>
                  حضرت ابوالحسن علی ابن موسی الرضا (علیہ السلام) کی کنیت
                  "ابوالحسن" ہے اور زیادہ مشہور لقب "رضا" ہے ۔ آپ کے دیگر القاب
                  صابر، زکی، ولی، وفی، سراج الله، نورالہدی، قرة عین المؤمنین،
                  مکیدة الملحدین، کفو، الملک، کافی الخلق ہیں۔
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="box">
                <img
                  className="morecover"
                  src={require("../../assets/img/food.jpg")}
                  alt="Card image cap"
                />

                <h5>کھانا</h5>
                <p>
                  حضرت ابوالحسن علی ابن موسی الرضا (علیہ السلام) کی کنیت
                  "ابوالحسن" ہے اور زیادہ مشہور لقب "رضا" ہے ۔ آپ کے دیگر القاب
                  صابر، زکی، ولی، وفی، سراج الله، نورالہدی، قرة عین المؤمنین،
                  مکیدة الملحدین، کفو، الملک، کافی الخلق ہیں۔
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
                <img
                  className="morecover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQDfYr0nNxUkHLn-K7-GrF8b0Cx0Xbx8lcL67uJIfD9dZFZERg&usqp=CAU"
                  alt="Card image cap"
                />

                <h5>ڈاکٹر اسٹاف </h5>
                <p>
                  حضرت ابوالحسن علی ابن موسی الرضا (علیہ السلام) کی کنیت
                  "ابوالحسن" ہے اور زیادہ مشہور لقب "رضا" ہے ۔ آپ کے دیگر القاب
                  صابر، زکی، ولی، وفی، سراج الله، نورالہدی، قرة عین المؤمنین،
                  مکیدة الملحدین، کفو، الملک، کافی الخلق ہیں۔
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
                <img
                  className="morecover"
                  src={require("../../assets/img/travel.jpg")}
                  alt="Card image cap"
                />

                <h5> سفر </h5>
                <p>
                  حضرت ابوالحسن علی ابن موسی الرضا (علیہ السلام) کی کنیت
                  "ابوالحسن" ہے اور زیادہ مشہور لقب "رضا" ہے ۔ آپ کے دیگر القاب
                  صابر، زکی، ولی، وفی، سراج الله، نورالہدی، قرة عین المؤمنین،
                  مکیدة الملحدین، کفو، الملک، کافی الخلق ہیں۔
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MoreService;
