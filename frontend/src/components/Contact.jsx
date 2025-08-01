import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      if (data.success) {
        alert("Message sent successfully!");
      } else {
        alert(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error("Form error:", err.message);
      alert("Submission failed. Try again.");
    }
  };

  return (
    <div className="container py-5 about-section" id="contact">
      <div className="section-title">Contact</div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            id="message"
            className="form-control"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
