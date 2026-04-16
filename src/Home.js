const handleSubmit = async () => {
  if (!name || !message) {
    alert("Please fill all fields");
    return;
  }

  try {
    await axios.post("https://student-portal-backend.onrender.com/api/feedback", {
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
