"use client";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from 'react-toastify';
import { setUserInfo } from "../../store/userSlice";
export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        "https://creepy-calf-gaiters.cyclic.app/auth/signin", payload
      );
      dispatch(setUserInfo({
        userRole: response.data.userRole,
        userName: response.data.userName,
        userId: response.data?.userId,
        contactNumber: response.data?.contactNumber,
      }));
      typeof window !== "undefined" ? localStorage.setItem('token', response.data.token) : null;
      typeof window !== "undefined" ? localStorage.setItem('userRole', response.data.userRole) : null;
      typeof window !== "undefined" ? localStorage.setItem('userName', response.data.userName) : null;
      if (response.data.userRole === 'Admin') {
        window.location.href = "/admin-dashboard";
      }
      else {
        window.location.href = "/client-dashboard";
      }

    } catch (error) {
      toast.error("Invalid Username or Password", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <form onSubmit={handleSubmit} >
          <h2 style={styles.center}>Sign In Page</h2>
          <div style={styles.formGroup}>
            <label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
                style={styles.input}
                required
              />
            </label>
          </div>
          <div style={styles.formGroup}>
            <label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                style={styles.input}
                required
              />
            </label>
          </div>
          <h4 style={{ color: "red" }}>{error ? error : null}</h4>
          <div style={styles.center}>
            <button
              type="submit"
              style={styles.button}
            >
              Sign in
            </button>
          </div>
        </form>
        <div style={styles.center}>
          <button
            onClick={() => router.push("/signup")}
            style={styles.SignUpButton}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
  },
  form: {
    width: "500px",
    padding: "20px",
    border: "5px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
  },
  formGroup: {
    marginBottom: "10px",
  },
  inputName: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    width: "48%",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
  },
  center: {
    textAlign: "center",
  },
  button: {
    fontSize: "20px",
    backgroundColor: "#3f7000",
    borderRadius: "10px",
    width: "300px",
  },
  SignUpButton: {
    marginTop: "5px",
    fontSize: "20px",
    textAlign: "center",
    backgroundColor: "#fae97d",
    borderRadius: "10px",
    width: "300px",
  },
};
