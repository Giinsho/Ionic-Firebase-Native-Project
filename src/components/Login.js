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
import {
  Link as LinkDom,
  useNavigate,
} from "react-router-dom";


export default function Login() {
  const emailRef = useRef();
    const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();


    try {
      setError("");
      setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value);
        navigate("/")
    } catch {
      setError("Failed to sign in");
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
          <h2 className="neonH">Log in</h2>
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

            <Box className="button">
              <Button
                size="small"
                className="button"
                variant="contained"
                disabled={loading}
                type="submit"
              >
                Log In
              </Button>
            </Box>
          </form>
        </CardContent>
        <CardActions>
          <Box className="boxLink">
            <Link component={LinkDom} to="/forgot-password" href="#">
              ForgotPassword?
            </Link>
          </Box>
        </CardActions>
        <CardActions>
          <p>
            New to site?
            <Link
              component={LinkDom}
              to="/signup"
              style={{ marginLeft: ".5rem" }}
              href="#"
            >
              Sign up now{" "}
            </Link>
            .
          </p>{" "}
        </CardActions>
      </Card>
    </div>
  );
}
