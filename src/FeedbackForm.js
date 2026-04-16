import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

function FeedbackForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!name || !message) {
      alert("Please fill all fields");
      return;
    }

    try {
      await axios.post("/api/feedback", {
        name,
        message
      });

      alert("Feedback submitted ✅");
      setName("");
      setMessage("");
    } catch (error) {
      console.log(error);
      alert("Error submitting feedback ❌");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        placeholder="Enter feedback"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default FeedbackForm;
