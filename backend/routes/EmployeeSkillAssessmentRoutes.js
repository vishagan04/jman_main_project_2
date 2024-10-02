const express = require('express');
const { submitEmployeeSkillAssessment, getSkillAssessmentsByEmployee } = require('../controllers/EmployeeSkillAssessmentController');
const router = express.Router();

// Route to submit a skill assessment for an employee
router.post('/', submitEmployeeSkillAssessment);

// Route to get skill assessments for a specific employee
router.get('/:employeeId', getSkillAssessmentsByEmployee);

module.exports = router;
