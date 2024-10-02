import React, { useState } from "react";
import { Button, Form, Col } from "react-bootstrap";

const SkillAssessmentForm = ({ assessmentId, onSubmit }) => {
  const [course, setCourse] = useState("");
  const [skill, setSkill] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const assessmentData = {
      assessmentId,
      course,
      skill,
      score,
    };

    try {
      const response = await fetch(`http://localhost:5000/api/assessments/${assessmentId}/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(assessmentData),
      });

      if (response.ok) {
        const newAssessment = await response.json();
        onSubmit(newAssessment); // Pass new assessment data to parent to update the table
        setCourse(""); // Clear form after submission
        setSkill("");
        setScore("");
        alert("Assessment submitted successfully!");
      } else {
        alert("Failed to submit assessment.");
      }
    } catch (error) {
      console.error("Error submitting assessment:", error);
      alert("Error submitting assessment.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="row mb-3">
        <Col md={6}>
          <Form.Group controlId="formCourse">
            <Form.Label>Course Completed</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter course name"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="form-control"
              required
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="formSkill">
            <Form.Label>Skill Obtained</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter skill name"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              className="form-control"
              required
            />
          </Form.Group>
        </Col>
      </div>

      <Form.Group controlId="formScore" className="mb-3">
        <Form.Label>Score</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          className="form-control"
          required
        />
      </Form.Group>

      <div className="d-flex justify-content-end">
        <Button variant="primary" type="submit" className="mt-3">
          Submit Assessment
        </Button>
      </div>
    </Form>
  );
};

export default SkillAssessmentForm;
