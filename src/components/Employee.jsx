import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Employee.css";
import { useNavigate } from "react-router-dom";

const Employee = () => {
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3200/auth/employee")
      .then((result) => {
        if (result.data.Status) {
          setEmployee(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3200/auth/deleteEmployee/` + id)
      .then((result) => {
        if (result.data.Status) {
          navigate("/dashboard/employee");
        } else {
          alert(result.data.Error);
        }
      });
  };

  return (
    <div className='px-5 mt-3'>
      <div className='d-flex justify-content-center'>
        <h3>Employee List</h3>
      </div>
      <Link to={"/dashboard/addEmployee"} className='btn btn-success'>
        Add Employee
      </Link>
      <div className='mt-3'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {employee.map((emp, index) => (
              <tr key={index}>
                <td>{emp.name}</td>
                <td>
                  <img
                    src={"http://localhost:3200/Images/" + emp.image}
                    alt='employee'
                    className='employee-image'
                  />
                </td>
                <td>{emp.email}</td>
                <td>{emp.address}</td>
                <td>{emp.salary}</td>
                <td>
                  <Link
                    to={`/dashboard/editEmployee/` + emp.id}
                    className='btn btn-info btn-sm me-2'
                  >
                    Edit
                  </Link>
                  <button
                    className='btn btn-warning btn-sm'
                    onClick={() => handleDelete(emp.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
