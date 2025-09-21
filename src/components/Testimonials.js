import React from "react";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section className="container" aria-label="Customer Testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonials">
        {testimonials.map((t, idx) => (
          <article key={idx} className="testimonial-card" tabIndex={0}>
            <p>"{t.statement}"</p>
            <p className="testimonial-name">
              - {t.name}, <em>{t.role}</em>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
