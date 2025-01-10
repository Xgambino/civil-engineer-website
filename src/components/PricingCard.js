import "./PricingCardStyles.css";
import { Link } from "react-router-dom";
import React from "react";

const PricingCard = () => {
  // Pricing data
  const pricingData = [
    {
      tier: "Basic",
      totalCost: "KES 250,000",
      consultationRate: "KES 5,000/hr",
      designCost: "KES 50,000/project",
      supervisionRate: "KES 5,000/hr",
      supervisionHours: "40 Hrs",
    },
    {
      tier: "Premium",
      totalCost: "KES 500,000",
      consultationRate: "KES 10,000/hr",
      designCost: "KES 100,000/project",
      supervisionRate: "KES 10,000/hr",
      supervisionHours: "40 Hrs",
    },
    {
      tier: "Business",
      totalCost: "KES 800,000",
      consultationRate: "KES 15,000/hr",
      designCost: "KES 200,000/project",
      supervisionRate: "KES 20,000/hr",
      supervisionHours: "40 Hrs",
    },
  ];

  return (
    <div className="pricing">
      <div className="card-container">
        {pricingData.map((plan, index) => (
          <div className="card" key={index}>
            <h3>-{plan.tier}-</h3>
            <span className="bar"></span>
            <p className="btc">{plan.totalCost}</p>
            <p>Initial Consultation: {plan.consultationRate}</p>
            <p>Structural Design: {plan.designCost}</p>
            <p>Site Supervision: {plan.supervisionRate}</p>
            <p>Site Supervision Hours: {plan.supervisionHours}</p>
            <Link to="/contact" className="btn">
              PURCHASE NOW
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
