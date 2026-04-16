import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post(
      "https://YOUR-BACKEND-NAME.onrender.com/api/feedback",
      {
        name,
        message,
      }
    );

    setName("");
    setMessage("");
    alert("Feedback submitted ✅");
  } catch (error) {
    console.error(error);
    alert("Error submitting feedback ❌");
  }
};

export default FeedbackForm;