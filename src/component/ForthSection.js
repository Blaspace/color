import React from "react";
import img1 from "../public/download.png";
import img2 from "../public/download3.png";
import img3 from "../public/download2.png";
import img4 from "../public/download4.png";

function ForthSection() {
  return (
    <div className="forth">
      <div className="forth-con">
        <div className="forth-header">
          <h2>Our Team</h2>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eaque
            labore ullam sint voluptatum exercitationem quisquam, distinctio
            ipsa excepturi tempore.
          </p>
        </div>
        <br />
        <br />
        <br />
        <div className="forth-prof">
          <div>
            <span>
              <img src={img1} alt="our team" />
            </span>
            <article>
              <h3>John Doe</h3>
              <p>Product designer</p>
            </article>
          </div>
          <div>
            <span>
              <img src={img2} alt="our team" />
            </span>
            <article>
              <h3>Jane Peter</h3>
              <p>Product designer</p>
            </article>
          </div>
          <div>
            <span>
              <img src={img3} alt="our team" />
            </span>
            <article>
              <h3>Daniel Mark</h3>
              <p>Product designer</p>
            </article>
          </div>
          <div>
            <span>
              <img src={img4} alt="our team" />
            </span>
            <article>
              <h3>Nina David</h3>
              <p>Product designer</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForthSection;
