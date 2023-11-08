import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Employee from "./components/Employee";
import Home from "./components/Home";
import Category from "./components/Category";
import Profile from "./components/Profile";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import AddCategory from "./components/AddCategory";
import AddEmployee from "./components/AddEmp";
import EditEmployee from "./components/EditEmployee";
import AuthPage from "./components/AuthPage";
import EmployeeLogin from "./components/EmployeeLogin";
import EmployeeDetail from "./components/EmployeeDetail";
import { useEffect } from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthPage />} />
        <Route path='/adminLogin' element={<Login />} />
        <Route path='/employeeLogin' element={<EmployeeLogin />} />
        <Route path='/employeeDetail/:id' element={<EmployeeDetail />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='' element={<Home />} />
          <Route path='/dashboard/employee' element={<Employee />} />
          <Route path='/dashboard/category' element={<Category />} />
          <Route path='/dashboard/profile' element={<Profile />} />
          <Route path='/dashboard/addCategory' element={<AddCategory />} />
          <Route path='/dashboard/addEmployee' element={<AddEmployee />} />
          <Route
            path='/dashboard/editEmployee/:id'
            element={<EditEmployee />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
