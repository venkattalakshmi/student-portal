import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

function FeedbackForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/feedback", {
      name,
      message,
    });

    setName("");
    setMessage("");
    alert("Feedback submitted ✅");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Enter feedback"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;