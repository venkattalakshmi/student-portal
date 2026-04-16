import React, { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔐 Simple Admin Protection
  useEffect(() => {
    const password = prompt("Enter Admin Password");

    if (password !== "admin123") {
      alert("Access Denied ❌");
      window.location.href = "/";
    }
  }, []);

  // 📡 Fetch feedbacks
  useEffect(() => {
    axios.get("https://student-portal-bxjv.onrender.com")
      .then((res) => {
        setFeedbacks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert("Error fetching data");
        setLoading(false);
      });
  }, []);

  return (
    <div style={{
      padding: "20px",
      textAlign: "center",
      background: "linear-gradient(to right, #4facfe, #00f2fe)",
      minHeight: "100vh"
    }}>
      <h1 style={{ color: "white" }}>Admin Dashboard 👨‍💼</h1>

      {loading ? (
        <p style={{ color: "white" }}>Loading...</p>
      ) : feedbacks.length === 0 ? (
        <p style={{ color: "white" }}>No feedback available</p>
      ) : (
        feedbacks.map((item) => (
          <div key={item.id} style={{
            background: "white",
            padding: "15px",
            margin: "15px auto",
            width: "320px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
          }}>
            <h3>{item.name}</h3>
            <p>{item.message}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Admin;