import React, { useState } from "react";
import axios from "axios";

function Home() {
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
    <div style={{
      textAlign: "center",
      paddingTop: "50px",
      background: "linear-gradient(to right, #4facfe, #00f2fe)",
      minHeight: "100vh"
    }}>
      <h1 style={{ color: "white" }}>Student Feedback Portal 🚀</h1>

      <div style={{
        background: "white",
        padding: "20px",
        width: "320px",
        margin: "20px auto",
        borderRadius: "10px"
      }}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "90%", padding: "10px", margin: "10px" }}
        />

        <textarea
          placeholder="Enter feedback"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ width: "90%", padding: "10px", margin: "10px" }}
        />

        <button
          onClick={handleSubmit}
          style={{
            padding: "10px 20px",
            background: "blue",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Home;
