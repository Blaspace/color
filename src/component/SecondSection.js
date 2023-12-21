import React from "react";
import img1 from "../public/img1.webp";
import img2 from "../public/img2.webp";
import img3 from "../public/img3.webp";
import img4 from "../public/download5.png";

function SecondSection() {
  return (
    <div className="second">
      <div className="second-con">
        <div className="secondbg">
          <div>
            <span>
              <img src={img1} alt="background" />
            </span>
            <span>
              <img src={img2} alt="background" />
            </span>
          </div>
          <div>
            <span>
              <img src={img3} alt="background" />
            </span>
            <span>
              <img src={img4} alt="background" />
            </span>
          </div>
        </div>
        <div className="sec">
          <div>
            <br />
            <h2>Amaizing Function</h2>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              eaque labore ullam sint voluptatum exercitationem quisquam,
              distinctio ipsa excepturi tempore. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Porro eaque labore ullam sint
              voluptatum exercitationem quisquam, distinctio ipsa excepturi
              tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Porro eaque labore ullam sint voluptatum exercitationem quisquam,
              distinctio ipsa excepturi tempore.
            </p>
            <br />
            <button>Contact Us</button>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
