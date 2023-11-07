import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    address: "",
    salary: "",
    categoryID: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3200/auth/category")
      .then((result) => {
        if (result.data.Status) {
          setCategory(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3200/auth/employee/` + id)
      .then((result) => {
        setEmployee({
          name: result.data.Result[0].name,
          email: result.data.Result[0].email,
          address: result.data.Result[0].address,
          salary: result.data.Result[0].salary,
          categoryID: result.data.Result[0].categoryID,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3200/auth/editEmployee/` + id, employee)
      .then((result) => {
        if (result.data.Status) {
          navigate("/dashboard/employee");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='d-flex justify-content-center align-items-center mt-4'>
      <div className='p-3 rounded w-50 border'>
        <h2>Edit Employee</h2>

        <form className='row g-1' onSubmit={handleSubmit}>
          <div className='col-12'>
            <label htmlFor='inputName' className='form-label'>
              Name
            </label>
            <input
              type='text'
              className='form-control rounded-0'
              id='inputName'
              placeholder='Enter Name'
              value={employee.name}
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
            />
          </div>
          <div className='col-12'>
            <label htmlFor='inputEmail4' className='form-label'>
              Email
            </label>
            <input
              type='email'
              className='form-control rounded-0'
              id='inputEmail4'
              placeholder='Enter Email'
              autoComplete='off'
              value={employee.email}
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
          </div>
          <div className='col-12'>
            <label htmlFor='inputSalary' className='form-label'>
              Salary
            </label>
            <input
              type='text'
              className='form-control rounded-0'
              id='inputSalary'
              placeholder='Enter Salary'
              autoComplete='off'
              value={employee.salary}
              onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.value })
              }
            />
          </div>
          <div className='col-12'>
            <label htmlFor='inputAddress' className='form-label'>
              Address
            </label>
            <input
              type='text'
              className='form-control rounded-0'
              id='inputAddress'
              placeholder='1234 Main St'
              autoComplete='off'
              value={employee.address}
              onChange={(e) =>
                setEmployee({ ...employee, address: e.target.value })
              }
            />
          </div>
          <div className='col-12'>
            <label htmlFor='category' className='form-label'>
              Category
            </label>
            <select
              name='category'
              id='category'
              className='form-select'
              onChange={(e) =>
                setEmployee({ ...employee, categoryID: e.target.value })
              }
            >
              {category.map((cat, index) => {
                return (
                  <option key={index} value={cat.id}>
                    {cat.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className='col-12 mb-3'></div>
          <div className='col-12'>
            <button type='submit' className='btn btn-primary w-100'>
              Edit Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
