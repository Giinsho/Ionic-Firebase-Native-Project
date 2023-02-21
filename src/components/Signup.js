import React, { useRef, useState } from "react";
import {
  FormGroup,
  FormControl,
  FormLabel,
  Button,
  Card,
  CardContent,
  CardActions,
  Input,
  Link,
  Typography,
  Alert,
  Box,
} from "@mui/material";
import styles from "./app.css";
import { useAuth } from "../Contexts/AuthContext";
import { Link as LinkDom, useNavigate } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/login")
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <div>
      <Card
        className="card"
        sx={{ maxWidth: 275, justifyContent: "center", alignItems: "center" }}
      >
        <Typography align="center" color="#1E95B8" component={"span"}>
          <h2 className="neonH">Sign up</h2>
          {error && <Alert severity="error">{error}</Alert>}
        </Typography>

        <CardContent>
          <form onSubmit={handleSubmit}>
            <FormGroup id="email">
              <FormLabel htmlFor="my-Input">Email address</FormLabel>
              <Input type="email" inputRef={emailRef} required />
            </FormGroup>
            <FormGroup id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" inputRef={passwordRef} required />
            </FormGroup>
            <FormGroup id="password-confirm">
              <FormLabel>Password Confirmation</FormLabel>
              <Input type="password" inputRef={passwordConfirmRef} required />
            </FormGroup>
            <Box className="button">
              <Button
                size="small"
                className="button"
                variant="contained"
                disabled={loading}
                type="submit"
              >
                Sign Up
              </Button>
            </Box>
          </form>
        </CardContent>
        <CardActions>
          Already have an account?
          <Link
            component={LinkDom}
            to="/login"
            style={{ marginLeft: ".5rem" }}
            href="#"
          >
            Log in{" "}
          </Link>
          .
        </CardActions>
      </Card>
    </div>
  );
}
