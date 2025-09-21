import React from "react";
import { pricingPlans } from "../data";

export default function Pricing() {
  return (
    <section className="container" aria-label="Pricing">
      <h2>Pricing Plans</h2>
      <div className="pricing-grid">
        {pricingPlans.map((plan, idx) => (
          <article key={idx} className="pricing-card">
            <h3>{plan.name}</h3>
            <p className="pricing-price">{plan.price}</p>
            <ul>
              {plan.features.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
