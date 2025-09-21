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
  const [errors, setErrors] = useState({});

  const demoTopics = [
    "Machine Learning",
    "Natural Language Processing",
    "Automation",
    "Analytics",
  ];

  const availableTimes = ["10:00 AM", "2:00 PM", "4:00 PM"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on change
  };

  const validateStep = () => {
    let newErrors = {};
    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required.";
      if (!formData.email.trim()) newErrors.email = "Email is required.";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = "Email is invalid.";
      if (!formData.company.trim()) newErrors.company = "Company is required.";
    } else if (step === 2) {
      if (!formData.interestedIn)
        newErrors.interestedIn = "Select a demo topic.";
    } else if (step === 3) {
      if (!formData.preferredDate)
        newErrors.preferredDate = "Select a demo date.";
      if (!formData.preferredTime)
        newErrors.preferredTime = "Select a demo time.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) setStep(4);
  };

  return (
    <div className="container" id="demo-schedule">
      <h2>Schedule a Free Demo</h2>

      {step === 1 && (
        <form>
          <label>
            Name *
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <small style={{ color: "red" }}>{errors.name}</small>
            )}
          </label>

          <label>
            Email *
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <small style={{ color: "red" }}>{errors.email}</small>
            )}
          </label>

          <label>
            Company *
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
            {errors.company && (
              <small style={{ color: "red" }}>{errors.company}</small>
            )}
          </label>

          <button type="button" onClick={nextStep}>
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
            >
              <option value="">Select one</option>
              {demoTopics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
            {errors.interestedIn && (
              <small style={{ color: "red" }}>{errors.interestedIn}</small>
            )}
          </label>

          <button type="button" onClick={prevStep}>
            Back
          </button>
          <button type="button" onClick={nextStep}>
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
              min={new Date().toISOString().split("T")[0]}
            />
            {errors.preferredDate && (
              <small style={{ color: "red" }}>{errors.preferredDate}</small>
            )}
          </label>

          <label>
            Pick your preferred time
            <select
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
            >
              <option value="">Select time</option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            {errors.preferredTime && (
              <small style={{ color: "red" }}>{errors.preferredTime}</small>
            )}
          </label>

          <button type="button" onClick={prevStep}>
            Back
          </button>
          <button type="submit">Confirm Schedule</button>
        </form>
      )}

      {step === 4 && (
        <div
          className="confirmation"
          role="alert"
          tabIndex={0}
          style={{ marginTop: "20px" }}
        >
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
