import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

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
export default FeedbackForm;
