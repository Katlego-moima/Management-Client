import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Employee from "./components/Employee";
import Home from "./components/Home";
import Category from "./components/Category";
import Profile from "./components/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCategory from "./components/AddCategory";
import AddEmployee from "./components/AddEmp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/adminlogin' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='' element={<Home />} />
          <Route path='/dashboard/employee' element={<Employee />} />
          <Route path='/dashboard/category' element={<Category />} />
          <Route path='/dashboard/profile' element={<Profile />} />
          <Route path='/dashboard/addCategory' element={<AddCategory />} />
          <Route path='/dashboard/addEmployee' element={<AddEmployee />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
