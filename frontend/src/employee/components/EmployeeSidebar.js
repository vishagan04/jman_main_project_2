// EmployeeSidebar.js
import React from "react";
import { NavLink } from "react-router-dom";

const EmployeeSidebar = () => {
  return (
    <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
      <div className="position-sticky">
        <h5 className="sidebar-heading">Employee Panel</h5>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink 
              to="/employee/dashboard" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/employee/profile" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/employee/assessment" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Skill Assessment
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/employee/logout" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default EmployeeSidebar;
