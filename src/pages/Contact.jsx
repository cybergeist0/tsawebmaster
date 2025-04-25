import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [feedback, setFeedback] = useState("");

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim() !== "") {
      alert("Thank you for your feedback!");
      setFeedback("");
    } else {
      alert("Please enter some feedback before submitting.");
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Contact Us</h1>
      <p className="page-content">
        Have questions or want to make a reservation? Reach out to us at:
      </p>
      <p className="page-content">(123) 456-7890</p>
      <p className="page-content">Or send us an email using the address below:</p>
      <p className="page-content">reservations@floraireserves.com</p>
      <hr />
      <h2 className="page-heading">Feedback</h2>
      <p className="page-content">
        We value our customers' feedback. If you want to leave a review of your
        experience at Floraire, please fill out this form.
      </p>
      <form className="feedback-form" onSubmit={handleFeedbackSubmit}>
        <textarea
          className="feedback-textbox"
          placeholder="Write your feedback here..."
          value={feedback}
          onChange={handleFeedbackChange}
        />
        <button className="feedback-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
