import React from "react";
import { features } from "../data";

export default function Features() {
  return (
    <section className="container" aria-label="Features and Benefits">
      <h2>Features & Benefits</h2>
      <div className="features-grid">
        {features.map((feature, idx) => (
          <article key={idx} className="feature-card">
            <div className="feature-icon" aria-hidden="true">
              {feature.icon}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
