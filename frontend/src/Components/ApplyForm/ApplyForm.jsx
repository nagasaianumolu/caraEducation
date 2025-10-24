import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ApplyForm.css";

const ApplyForm = () => {
  const location = useLocation();
  const { programTitle, courses } = location.state || { programTitle: "", courses: [] };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [result, setResult] = useState("");

  // Auto-select course if only one available
  useEffect(() => {
    if (courses.length === 1) {
      setFormData(prev => ({ ...prev, course: courses[0] }));
    }
  }, [courses]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Submitting...");

    // Only send the fields that backend expects
    const payload = { ...formData };

    try {
      const response = await fetch("http://localhost:8080/api/forms/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();
      console.log("Response:", response.status, responseData);

      if (response.ok) {
        setResult("🎓 Application Submitted Successfully!");
        setFormData({ name: "", email: "", phone: "", course: "", message: "" });
      } else {
        setResult("❌ Submission failed. Server responded with: " + JSON.stringify(responseData));
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("⚠️ Network or Server error. Please try again later.");
    }
  };

  return (
    <div className="apply-page-container">
      <div className="apply-card">
        <h2>Apply for Admission</h2>
        {programTitle && <h3>{programTitle}</h3>}

        <form onSubmit={handleSubmit} className="apply-form" autoComplete="off">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Select Course</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">-- Choose your course --</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Additional Message</label>
            <textarea
              name="message"
              placeholder="Any additional information..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit Application
          </button>
        </form>

        {result && <p className="result-message">{result}</p>}
      </div>
    </div>
  );
};

export default ApplyForm;
