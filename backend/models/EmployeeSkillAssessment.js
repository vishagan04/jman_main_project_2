const mongoose = require('mongoose');

const EmployeeSkillAssessmentSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  assessmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Assessment', required: true },
  certification: { type: String, required: true },
  skills: { type: String, required: true },
  marks: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const EmployeeSkillAssessment = mongoose.model('EmployeeSkillAssessment', EmployeeSkillAssessmentSchema);
module.exports = EmployeeSkillAssessment;
