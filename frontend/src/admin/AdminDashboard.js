import React, { useEffect, useState } from "react";
import Navbar from "../UI-components/Navbar";
import Sidebar from "../UI-components/Sidebar";
import Chart from "react-apexcharts";

const AdminDashboard = () => {
  const [totalEmployees, setTotalEmployees] = useState(0);
  const [totalSkills, setTotalSkills] = useState(0);
  const [totalCourses, setTotalCourses] = useState(0);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const employeeResponse = await fetch("http://localhost:5000/api/employees");
        const employeesData = await employeeResponse.json();
        setTotalEmployees(employeesData.length);

        const skillResponse = await fetch("http://localhost:5000/api/skills");
        const skillsData = await skillResponse.json();
        setTotalSkills(skillsData.length);

        const courseResponse = await fetch("http://localhost:5000/api/courses");
        const coursesData = await courseResponse.json();
        setTotalCourses(coursesData.length);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);

  // Pie chart for skills distribution
  const skillsPieChartOptions = {
    labels: ["Technical", "Soft Skills", "Certifications"],
    series: [60, 30, 10], // Example data
    chart: {
      type: "pie",
    },
    legend: {
      position: 'bottom'
    },
  };

  // Radial bar chart for employee skill completion
  const radialBarOptions = {
    series: [75], // Example completion data
    chart: {
      type: 'radialBar'
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          value: {
            show: true,
            fontSize: '20px'
          }
        }
      }
    },
    labels: ["Skill Completion"],
  };

  // Area chart for employee course progression over months
  const areaChartOptions = {
    series: [{
      name: "Employees",
      data: [10, 30, 50, 70, 90, 110] // Example data
    }],
    chart: {
      type: "area",
      height: 350
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // Example months
    },
    stroke: {
      curve: "smooth",
    },
  };

  return (
    <div>
      <Navbar />
      <div className="row">
        <Sidebar />
        <div className="container mt-4 col-md-9">
          <h1 className="mb-4">Admin Dashboard</h1>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Welcome to the Admin Dashboard!</h5>
              <p className="card-text">
                Here you can manage employee skills, courses, and more.
              </p>
              <div className="row mt-4">
                {/* Total Employees Card */}
                <div className="col-lg-4">
                  <div className="card shadow">
                    <div className="card-body">
                      <h5 className="card-title">
                        <i className="fas fa-users"></i> Total Employees
                      </h5>
                      <p className="card-text">{totalEmployees}</p>
                    </div>
                  </div>
                </div>
                {/* Skills Pie Chart */}
                <div className="col-lg-4">
                  <div className="card shadow">
                    <div className="card-body">
                      <h5 className="card-title">Skills Distribution</h5>
                      <Chart options={skillsPieChartOptions} series={skillsPieChartOptions.series} type="pie" width="100%" />
                    </div>
                  </div>
                </div>
                {/* Radial Bar Chart for Skill Completion */}
                <div className="col-lg-4">
                  <div className="card shadow">
                    <div className="card-body">
                      <h5 className="card-title">Skill Completion Rate</h5>
                      <Chart options={radialBarOptions} series={radialBarOptions.series} type="radialBar" width="100%" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                {/* Area Chart for Employee Progress */}
                <div className="col-lg-12">
                  <div className="card shadow">
                    <div className="card-body">
                      <h5 className="card-title">Employee Course Progress Over Time</h5>
                      <Chart options={areaChartOptions} series={areaChartOptions.series} type="area" height={350} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
