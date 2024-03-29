import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function FiFthSection() {
  return (
    <div className="fifth">
      <div className="fifth-con">
        <section>
          <h1 className="style-heading">Anita Allen</h1>
          <p>
            <b>CEO and Manager</b>
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eaque
            labore ullam sint voluptatum exercitationem quisquam, distinctio
            ipsa excepturi tempore. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Porro eaque labore ullam sint voluptatum
            exercitationem quisquam, distinctio ipsa excepturi tempore. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Porro eaque
          </p>
          <br />
          <div>
            <br />
            <p>adipisicing</p>
            <div className="progress"></div>
            <br />
            <br />

            <p>adipisicing</p>
            <div className="progress"></div>
            <br />
            <br />

            <p>adipisicing</p>
            <div className="progress"></div>
            <br />
          </div>
        </section>
      </div>
      <div className="fifth-bg"></div>
      <div className="fifth-g">
        <div>
          <h3>Get in touch with our team for more</h3>
          <p>Lorem ipsum dolor sit amet consectetur</p>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <span>
          <CiFacebook />
          <FaWhatsapp />
          <FaInstagram />
        </span>
      </div>
    </div>
  );
}

export default FiFthSection;
