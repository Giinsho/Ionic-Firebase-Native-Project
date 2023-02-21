import React, { useState } from "react";
import styles from "./app.css";
import {
  AppBar,
  Container,
  Typography,
  Toolbar,
  IconButton,
} from "@mui/material";
import Facebook from "@mui/icons-material/Facebook";
import YouTube from "@mui/icons-material/YouTube"; 
import LinkedIn from "@mui/icons-material/LinkedIn";
import { Face } from "@mui/icons-material";
export default function MyFooter() {
  return (
    <>
      <AppBar position="static" style={{background: "linear-gradient(0deg, rgba(48,127,242,1) 20%, rgba(195,37,114,0.5886729691876751) 100%)",position:"fixed",bottom:"0"}}>
        <Toolbar>
          <IconButton
            aria-label="Facebook.com"
            onClick={() => window.open("https://www.facebook.com/")}
          >
            <Facebook style={{ color: "#01D5FF" }} />
          </IconButton>

          <IconButton
            aria-label="Linkedin.com"
            onClick={() => window.open("https://www.Linkedin.com")}
          >
            <LinkedIn style={{ color: "yellow" }} />
          </IconButton>

          <IconButton
            aria-label="Youtube.com"
            onClick={() =>
              window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0")
            }
          >
            <YouTube style={{ color: "Red" }} />
          </IconButton>

          <Typography color="inherit" style={{ right:"20%" }}>
            © 2021 Łukasz Graczyk
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
