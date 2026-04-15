CREATE DATABASE student_portal;

USE student_portal;

CREATE TABLE feedback (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  message TEXT
);