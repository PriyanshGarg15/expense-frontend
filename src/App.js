import { BrowserRouter, Routes, Route } from "react-router-dom";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import NewRecord from "./components/Add/NewRecordForm";
import Home from "./Pages/Home";
import IncomeList from "./Pages/Income/IncomeList";
import Navbar from "./components/Navigation/Navbar";
import Profile from "./Pages/Users/Profile/Profile";
import Register from "./Pages/Users/Register/Register";
import Login from "./Pages/Users/Login/Login";
import ExpensesList from "./Pages/Expenses/ExpensesList";
import Dashboard from "./Pages/Dashboard/Dashboard";
import EditContent from "./components/EditContent/EditContent";
import UserProfileExpList from "./Pages/Users/Profile/UserProfileExpList";
import UserProfileIncList from "./Pages/Users/Profile/UserProfileIncList";
import UpdateProfile from "./Pages/Users/Profile/UpdateProfile";
import AddIncome from "./Pages/Income/AddIncome";
import AddExpense from "./Pages/Expenses/AddExpense";
import PrivateProtectRoute from "./components/Navigation/PrivateProtectRoute";
import AdminRoute from "./components/Navigation/AdminRoute";
import NotAdmin from "./components/NotAdmin/NotAdmin";

const options = {
  timeout: 50000,
  position: positions.BOTTOM_CENTER,
};

const App = () => {
  return (
    <Provider template={AlertTemplate} {...options}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<AdminRoute element={Dashboard} />} />
          <Route
            path="/user-profile-expenses"
            element={<PrivateProtectRoute element={UserProfileExpList} />}
          />
          <Route
            path="/user-profile-income"
            element={<UserProfileIncList />}
          />
          <Route path="/not-admin" element={<NotAdmin />} />
          <Route
            path="/update-profile"
            element={<PrivateProtectRoute element={UpdateProfile} />}
          />
          <Route path="/edit" element={<PrivateProtectRoute element={EditContent} />} />
          <Route path="/add-expense" element={<PrivateProtectRoute element={AddExpense} />} />
          <Route path="/add-income" element={<PrivateProtectRoute element={AddIncome} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<PrivateProtectRoute element={Profile} />} />
          <Route path="/incomes" element={<PrivateProtectRoute element={IncomeList} />} />
          <Route path="/expenses" element={<PrivateProtectRoute element={ExpensesList} />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
