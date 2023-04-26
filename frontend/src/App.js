import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/login";
import Dashboard from "./Pages/Super_Admin/Dashboard/dashboard";
import Header from "./Components/Header/header";
import Organizations from "./Pages/Super_Admin/Organizations/OrganizationsList/organizations";
import Admins from "./Pages/Super_Admin/Admins/AdminsList/admins";
import Complaints from "./Pages/Super_Admin/Complaints/ComplaintsList/complaints";
import AddOrgPage from "./Pages/Super_Admin/Organizations/AddOrganization/addOrg";
import AddAdmin from "./Pages/Super_Admin/Admins/AddNewAdmin/addAdmin";
import OrgDetails from "./Pages/Super_Admin/Organizations/OrganizationDetails/orgDetails";
import AdminDetails from "./Pages/Super_Admin/Admins/AdminDetails/adminDetails";
import ComplaintDetails from "./Pages/Super_Admin/Complaints/ComplaintsDetail/complaintDetails";
import AdminDashboard from "./Pages/Admin/Dashboard/adminDashboard";
import Categories from "./Pages/Admin/Categories/categories";
import AdminComplaints from "./Pages/Admin/Complaints/AdminComplaints";
import EmployeesList from "./Pages/Admin/Employees/employees";
import Inventory from "./Pages/Admin/Inventory/inventory";
import Requests from "./Pages/Admin/Requests/requests";
import Returns from "./Pages/Admin/Returns/returns";
import Vendors from "./Pages/Admin/Vendors/vendors";
import AddItem from "./Pages/Admin/Inventory/AddItem/addItem";
import AddCategory from "./Pages/Admin/Categories/AddCategory/addCategory";
import AddVendor from "./Pages/Admin/Vendors/AddVendor/addVendor";
import AddComplaint from "./Pages/Admin/Complaints/AddComplaint/addComplaint";
import AddEmployee from "./Pages/Admin/Employees/AddEmployee/addEmployee";
import ItemDetails from "./Pages/Admin/Inventory/itemDetails/itemDetails";
import EmpDetails from "./Pages/Admin/Employees/EmployeeDetails/empDetails";
import ReqDetails from "./Pages/Admin/Requests/RequestDetails/reqDetails";





function App() {
  const user = "Super Admin";

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
        <Header user={user} />
        {user === "Super Admin" && (
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/organizations" element={<Organizations />} />
            <Route path="/admins" element={<Admins />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="/newOrg" element={<AddOrgPage />} />
            <Route path="/newAdmin" element={<AddAdmin />} />
            <Route path="/orgDetails" element={<OrgDetails />} />
            <Route path="/adminDetails" element={<AdminDetails />} />
            <Route path="/complaintDetails" element={<ComplaintDetails />} />
          </Routes>
        )}
        {user === "Admin" && (
          <Routes>
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/addCategory" element={<AddCategory />} />
            <Route path="/complaints" element={<AdminComplaints />} />
            <Route path="/addComplaint" element={<AddComplaint />} />
            <Route path="/employees" element={<EmployeesList />} />
            <Route path="/addEmployee" element={<AddEmployee />} />
            <Route path="/employeeDetails" element={<EmpDetails />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/addItem" element={<AddItem />} />
            <Route path="/itemDetails" element={<ItemDetails />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/requestDetails" element={<ReqDetails />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/addVendor" element={<AddVendor />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
