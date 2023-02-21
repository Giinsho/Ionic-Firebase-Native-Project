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
import swal from "sweetalert";
export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }
      Promise.all(promises).then(() => {
            swal(
              "Updated!",
              "Your account has been updated successfuly!",
              "success"
            );
          navigate("/");
          setMessage("Account has been updated successfuly");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div>
      <Card
        className="card"
        sx={{ maxWidth: 275, justifyContent: "center", alignItems: "center" }}
      >
        <Typography align="center" color="#1E95B8" component={"span"}>
          <h2 className="neonH">Update Profile</h2>
          {error && <Alert severity="error">{error}</Alert>}
          {message && <Alert severity="success">{message}</Alert>}
        </Typography>

        <CardContent>
          <form onSubmit={handleSubmit}>
            <FormGroup id="email">
              <FormLabel htmlFor="my-Input">Email address</FormLabel>
              <Input
                type="email"
                inputRef={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </FormGroup>
            <FormGroup id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                inputRef={passwordRef}
                placeholder="Leave it blank to keep the same"
                autoComplete="new-password"
              />
            </FormGroup>
            <FormGroup id="password-confirm">
              <FormLabel>Password Confirmation</FormLabel>
              <Input
                type="password"
                inputRef={passwordConfirmRef}
                placeholder="Leave it blank to keep the same"
                autoComplete="new-password"
              />
            </FormGroup>
            <Box className="button">
              <Button
                size="small"
                className="button"
                variant="contained"
                disabled={loading}
                type="submit"
              >
                Update
              </Button>
            </Box>
          </form>
        </CardContent>
        <CardActions>
          Already have an account?
          <Link
            component={LinkDom}
            to="/"
            style={{ marginLeft: ".5rem" }}
            href="#"
          >
            Cancel{" "}
          </Link>
          .
        </CardActions>
      </Card>
    </div>
  );
}
