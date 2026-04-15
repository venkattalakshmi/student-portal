import React, { useEffect, useState } from "react";
import axios from "axios";
import "./List.css";

function FeedbackList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const res = await axios.get("http://localhost:5000/api/feedback");
    setData(res.data);
  };

  return (
    <div>
      <h2>All Feedback</h2>
      {data.map((item) => (
        <div className="feedback-card" key={item.id}>
          <strong>{item.name}</strong>
          <p>{item.message}</p>
        </div>
      ))}
    </div>
  );
}

export default FeedbackList;