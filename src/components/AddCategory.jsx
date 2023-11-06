import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3200/auth/addCategory', { category })
      .then((response) => {
        const result = response.data;
        if (result.Status) {
          navigate('/dashboard/category');
        } else {
          alert(result.error || 'An error occurred');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred');
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-75">
      <div className="p-3 rounded w-25 border">
        <h2>Add Category</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="category">
              <strong>Category:</strong>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Enter Category"
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <button className="btn btn-success w-100 rounded-0 mb-2">
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
