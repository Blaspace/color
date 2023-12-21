import React from 'react'
import {CiFlag1, CiDeliveryTruck, CiLight, CiBadgeDollar, CiCalendarDate, CiCreditCardOff} from "react-icons/ci"

function Thirdsection() {
  return (
    <div className="third">
      <div className= "third-content">
        <div className="third-text">
          <h2>
            Sheraing<br/>
            Your Happyness
          </h2>
          <br/>
          <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro eaque labore ullam sint voluptatum exercitationem quisquam, 
                    distinctio ipsa excepturi tempore.<br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro eaque labore ullam sint voluptatum exercitationem quisquam, 
                    distinctio ipsa excepturi tempore.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro eaque labore ullam sint voluptatum exercitationem quisquam, 
                    distinctio ipsa excepturi tempore.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro eaque labore ullam sint voluptatum exercitationem quisquam, 
                    distinctio ipsa excepturi tempore.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro eaque labore ullam sint voluptatum exercitationem quisquam, 
                    distinctio ipsa excepturi tempore.
          </p>
          <br/>
          <button>Learn More</button>
        </div>
        <div className="third-icons">
        <div>
            <span>
              <CiBadgeDollar className="icon"/><br/>
              <p>Payment with eas</p>
            </span>
            <span>
            <CiCalendarDate className="icon"/><br/>
              <p>Book a Date</p>
            </span>
            <span>
            <CiCreditCardOff className="icon"/><br/>
            <p>Payment Accepted</p>
            </span>
          </div>
          <div>
            <span>
            <CiDeliveryTruck className="icon"/><br/>
              <p>Fast Delivery</p>
            </span>
            <span>
            <CiFlag1 className="icon"/><br/>
              <p>Join the Best Brand</p>
            </span>
            <span>
            <CiLight className="icon"/><br/>
            <p>Shine Bright with Us</p>
            </span>
          </div>
        </div>
      </div>
    <div className="thirdbg">
      <div className="third-con"></div><div className="third-img"></div>
    </div>
    </div>
  )
}

export default Thirdsection