import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import styles from "./background.css";
import { Container,Divider } from "@mui/material";
import { AuthProvider } from "../Contexts/AuthContext";

import Profile from "./Profile.js";
import Signup from "./Signup";
import Dashboard from "./Dashboard.js";
import Login from "./Login.js";
import Navbar from "./Navbar.js";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword.js";
import UpdateProfile from "./UpdateProfile.js";
import MyFooter from "./MyFooter";
import Open from "./Open";
import Location from "./Location";
import UserPass from "./UserPass";
import DashboardUser from "./DashboardUser";
import SearchBar from "./SearchBar";
import 'bootstrap/dist/css/bootstrap.min.css';

import Notification from "./Notification"
function App() {



  return (

    <div className="background">
      <Router>
        <AuthProvider>
          <Navbar />

          <Container
            style={{
              display: "flex",

              alignItems: "center",
              height: "100%",
              marginBottom:"20%",
              marginTop: "20%",
            }}
          >
           
            <Routes>
              <Route exact path="/" element={<PrivateRoute />}>
                <Route exact path="/" element={<Dashboard />} />
              </Route>

              <Route className="login" path="/Login" element={<Login />} />
              <Route className="signup" path="/signup" element={<Signup />} />

              <Route path="/profile" element={<PrivateRoute />}>
                <Route
                  className="profile"
                  path="/profile"
                  element={<Profile />}
                />
              </Route>
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/update-profile" element={<PrivateRoute />}>
                <Route
                  className="updateProfile"
                  path="/update-profile"
                  element={<UpdateProfile />}
                />
              </Route>

              <Route path="/user-dashboard" element={<PrivateRoute />}>
                <Route
                  className="userDashboard"
                  path="/user-dashboard"
                  element={<DashboardUser />}
                />
              </Route>
              <Route className="open" path="/open" element={<Open />} />
              <Route
                className="location"
                path="/location"
                element={<Location />}
              />
              <Route path="/prices" element={<UserPass />} />
            </Routes>
          </Container>
          <Divider style={{  position: "fixed",bottom:"1.1", background: "red" }}></Divider>
          <MyFooter />
        </AuthProvider>
      </Router>
      <div >
        <Notification/>
      </div>
    </div>
  );
}

export default App;
