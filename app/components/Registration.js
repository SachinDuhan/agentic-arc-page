"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    usn: "",
    year: "",
    phone: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const whatsappLink = process.env.NEXT_PUBLIC_WHATSAPP_LINK;
  const supabase = createClient();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    setSubmitting(true);

    try {
      const { error } = await supabase.from("registrations").insert([
        {
          ...formData,
          registered_at: new Date().toISOString(),
        },
      ]);
      
      if (error) throw error;
      
      alert("Registration successful! Redirecting to WhatsApp group...");

      if (whatsappLink && whatsappLink !== "YOUR_WHATSAPP_LINK") {
        window.location.href = whatsappLink;
      } else {
        alert("Success! Form data saved. (WhatsApp link not configured)");
        setSubmitting(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error: " + error.message);
      setSubmitting(false);
    }
  };

  return (
    <section className="registration" id="register">
      <div className="container">
        <div className="reg-form">
          <h2>Join Agentic Arc</h2>
          <p className="reg-subtitle">
            Become a part of the future of AI at SVIT.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                required
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="usn">USN</label>
              <input
                type="text"
                id="usn"
                required
                placeholder="e.g. 1SV22AI0XX"
                value={formData.usn}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="year">Year</label>
              <select
                id="year"
                required
                value={formData.year}
                onChange={handleChange}
              >
                <option value="">Select Year</option>
                <option value="1st">1st Year</option>
                <option value="2nd">2nd Year</option>
                <option value="3rd">3rd Year</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                required
                placeholder="10-digit mobile number"
                pattern="[0-9]{10}"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary submit-btn"
              disabled={submitting}
            >
              {submitting ? "Registering..." : "Register Now"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
