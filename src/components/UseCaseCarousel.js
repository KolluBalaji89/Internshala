import React, { useState, useEffect } from "react";
import { useCases } from "../data";

export default function UseCaseCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % useCases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="usecase-carousel"
      aria-label="Use cases and Solutions"
      tabIndex={0}
    >
      {useCases[index]}
    </section>
  );
}
