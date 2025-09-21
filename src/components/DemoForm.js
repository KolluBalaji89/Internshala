import React, { useState } from "react";

export default function DemoScheduler() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interestedIn: "",
    preferredDate: "",
    preferredTime: "",
  });

  // Available demo topics and times for example
  const demoTopics = [
    "Machine Learning",
    "Natural Language Processing",
    "Automation",
    "Analytics",
  ];

  const availableTimes = ["10:00 AM", "2:00 PM", "4:00 PM"];

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(4); // Show confirmation
  };

  return (
    <div className="container">
      <h2>Schedule a Free Demo</h2>

      {step === 1 && (
        <form>
          <label>
            Name *
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </label>

          <label>
            Email *
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          <label>
            Company *
            <input
              type="text"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
            />
          </label>

          <button
            type="button"
            onClick={nextStep}
            disabled={!formData.name || !formData.email || !formData.company}
          >
            Next
          </button>
        </form>
      )}

      {step === 2 && (
        <form>
          <label>
            What demo topic are you interested in?
            <select
              name="interestedIn"
              value={formData.interestedIn}
              onChange={handleChange}
              required
            >
              <option value="">Select one</option>
              {demoTopics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </label>

          <button type="button" onClick={prevStep}>
            Back
          </button>
          <button
            type="button"
            onClick={nextStep}
            disabled={!formData.interestedIn}
          >
            Next
          </button>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <label>
            Pick your preferred demo date
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              required
              min={new Date().toISOString().split("T")[0]}
            />
          </label>

          <label>
            Pick your preferred time
            <select
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              required
            >
              <option value="">Select time</option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </label>

          <button type="button" onClick={prevStep}>
            Back
          </button>
          <button
            type="submit"
            disabled={!formData.preferredDate || !formData.preferredTime}
          >
            Confirm Schedule
          </button>
        </form>
      )}

      {step === 4 && (
        <div className="confirmation" role="alert" tabIndex={0}>
          <h3>Thank you, {formData.name}!</h3>
          <p>
            Your demo on <strong>{formData.interestedIn}</strong> is scheduled
            for <strong>{formData.preferredDate}</strong> at{" "}
            <strong>{formData.preferredTime}</strong>.
          </p>
          <p>We will contact you shortly at {formData.email}.</p>
        </div>
      )}
    </div>
  );
}
