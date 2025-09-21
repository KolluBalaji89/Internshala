import React, { useState } from "react";
import "./App.css";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import DemoScheduler from "./components/DemoScheduler"; // Updated import to the multi-step scheduler
import UseCaseCarousel from "./components/UseCaseCarousel";

export default function App() {
  // Simple login state (for demo)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Logout handler
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Simulate login for demo purposes
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <header>
        <h1>ServiceHive AI Solutions</h1>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            style={{ marginTop: "8px", padding: "0.5rem 1rem" }}
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleLogin}
            style={{ marginTop: "8px", padding: "0.5rem 1rem" }}
          >
            Login
          </button>
        )}
      </header>

      <main>
        <section className="hero" id="hero">
          <h1>Empowering Your Business with AI and Automation</h1>
          <p>
            Unlock the power of machine learning, NLP, and automation for better
            decisions and streamlined workflows.
          </p>
          <button
            className="cta-button"
            onClick={() =>
              document
                .getElementById("demo-schedule")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Schedule a Demo
          </button>
        </section>
        <Features />
        <UseCaseCarousel />
        <Testimonials />
        <Pricing />
        <DemoScheduler /> {/* Use multi-step demo scheduler here */}
      </main>

      <footer>
        &copy; 2025 ServiceHive AI Solutions |{" "}
        <a
          href="#hero"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to top
        </a>
      </footer>
    </>
  );
}
