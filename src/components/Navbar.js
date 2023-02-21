import React, { useState } from "react";
import styles from "./app.css";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Link,
  Alert,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { useAuth } from "../Contexts/AuthContext";
import { Link as LinkDom, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Box } from "@mui/system";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/core.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const [error, setError] = useState("");
  const { currentUser, logout, logged } = useAuth();
  console.log("NULL" + JSON.stringify({ logged }));
  async function handleLogout() {
    setError("");

    try {
      await logout().then(navigate("/login"));
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <AppBar
        style={{
          background:
            "linear-gradient(0deg, rgba(3,127,242,1) 0%, rgba(44,160,242,1) 100%)",
        }}
      >
        <Toolbar>
          <Menu
            menuButton={
              <MenuButton
                style={{
                  backgroundColor: "#177ed3",
                  color: "#fff",
                  textShadow: "0 0 7px #fff 0 0 10px #fff 0 0 21px #fff",
                  borderRadius: "50px 50px 50px 50px",
                  boxShadow: "-2px -2px 30px 1px violet, 2px 2px 30px 1px blue",
                }}
              >
                {" "}
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <Typography variant="h6" style={{ marginRight: "2%" }}>
                    Menu
                  </Typography>
                  <MenuIcon />
                </IconButton>
              </MenuButton>
            }
          >
            <MenuItem className="menuItemStyle">
              <Link variant="body1" to="/profile" component={LinkDom} href="#">
                <Button color="secondary">Profile</Button>
              </Link>
            </MenuItem>
            <MenuItem className="menuItemStyle">
              <Link  to="/" component={LinkDom} href="#">
                <Button color="secondary">Activities</Button>
              </Link>
            </MenuItem>

            <MenuItem className="menuItemStyle">
              <Link  to="/open" component={LinkDom} href="#">
                <Button color="secondary">Open time</Button>
              </Link>
            </MenuItem>
            <MenuItem className="menuItemStyle">
              <Link  to="/location" component={LinkDom} href="#">
                <Button color="secondary">Location</Button>
              </Link>
            </MenuItem>
            <MenuItem className="menuItemStyle">
              <Link  to="/prices" component={LinkDom} href="#">
                <Button color="secondary">Prices</Button>
              </Link>
            </MenuItem>
            <MenuItem className="menuItemStyle">
              <Link
               
                to="/user-dashboard"
                component={LinkDom}
                href="#"
              >
                <Button color="secondary">User Dashboard</Button>
              </Link>
            </MenuItem>
            <MenuItem className="menuItemStyle">
              <Link to="/signup" component={LinkDom} href="#">
                {logged ? null : <Button color="secondary">Sign up</Button>}
              </Link>
            </MenuItem>
            <MenuItem className="menuItemStyle">
              <Link
                
                to="/login"
                component={LinkDom}
                href="#"
                style={{ marginRight: "5%" }}
              >
                {logged ? null : <Button color="secondary">Login</Button>}
              </Link>
            </MenuItem>
            <MenuItem className="menuItemStyle">
              {logged ? (
                <Link color="primary">
                  <Button variant="link" color="secondary" onClick={handleLogout}>
                    Log Out
                  </Button>
                </Link>
              ) : null}
            </MenuItem>
          </Menu>
        </Toolbar>

          <SearchBar></SearchBar>

      </AppBar>


    </>
  );
};

export default Navbar;
