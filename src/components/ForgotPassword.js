import React, { useRef, useState } from "react";
import {
  Button,
  Card,
  Alert,
  CardContent,
  CardActions,
  FormGroup,
  FormControl,
  FormLabel,
  Input,
    Box,
  Link,
} from "@mui/material";
import { useAuth } from "../Contexts/AuthContext";
import { Link as LinkDom } from "react-router-dom";
import styles from "./app.css";
export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <>
      <Card className="cardReset">
        <CardContent>
          <h2 className="header">Password Reset</h2>
          {error && <Alert severity="error">{error}</Alert>}
          {message && <Alert severity="success">{message}</Alert>}
          <form onSubmit={handleSubmit}>
            <FormGroup id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" inputRef={emailRef} required />
            </FormGroup>
            <Box className="button">
              <Button
                disabled={loading}
                type="submit"
                size="small"
                variant="contained"
              >
                Reset Password
              </Button>
            </Box>
          </form>
        </CardContent>
        <CardActions>
          <Box className="boxLink2">
            <Link className="linkProfile" component={LinkDom} to="/login">
              Login
            </Link>
          </Box>
        </CardActions>
        <CardActions>
          <Box className="boxLink3">
            Need an account?
            <Link
              className="linkReset"
              component={LinkDom}
              to="/signup"
              style={{ marginLeft: ".5rem" }}
            >
              Sign Up
            </Link>
            .
          </Box>
        </CardActions>
      </Card>
    </>
  );
}
