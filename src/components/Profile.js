import React, { useState } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Card,  CardContent, Box} from "@mui/material";
import styles from "./app.css";
export default function Profile() {

  const { currentUser } = useAuth();
  const navigate = useNavigate();


  return (
    <>
      <Card className="cardProfile">
        <CardContent>
          <h2 className="header">Profile</h2>
          <strong>Email:</strong> <p>{currentUser.email}</p>
          <Box className="boxProfile">
            <Link
              color="info"
              to="/update-profile"
              style={{ marginLeft: ".5rem" }}
              className="boxProfile"
            >
              Update Profile
            </Link>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
