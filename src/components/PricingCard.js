import "./PricingCardStyles.css";
import { Link } from "react-router-dom";
import React from "react";

const PricingCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>-Basic-</h3>
          <span className="bar"></span>
          <p className="btc">KES 250,000</p>
          <p>Initial Consultation:KES 5,000/hr</p>
          <p>Structural Design: KES 50,000/project</p>
          <p>Site Supervision: KES 5,000/hr</p>
          <p>Site Supervision Hours: 40 Hrs</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>
        <div className="card">
          <h3>-Premium-</h3>
          <span className="bar"></span>
          <p className="btc">KES 500,000</p>
          <p>Initial Consultation: KES 10,000/hr</p>
          <p>Structural Design: KES 100,000/project</p>
          <p>Site Supervision: KES 10,000/hr</p>
          <p>Site Supervision Hours: 40 Hrs</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>
        <div className="card">
          <h3>-Business-</h3>
          <span className="bar"></span>
          <p className="btc">KES 800,000</p>
          <p>Initial Consultation:KES 15,000/hr</p>
          <p>Structural Design: KES 200,000/project</p>
          <p>Site Supervision: KES 20,000/hr</p>
          <p>Site Supervision Hours: 40 Hrs</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
