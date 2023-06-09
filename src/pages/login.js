import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
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
              value={confirmPassword}
              onChange={handlePasswordChange}
              placeholder="Password"
              style={styles.input}
              required
            />
          </label>
        </div>
        <div style={styles.center}>
          <button
            type="submit"
            onClick={() => router.push("/admin-dashboard")}
            style={styles.button}
          >
            Sign in
          </button>
        </div>
        <div style={styles.center}>
          <button
            onClick={() => router.push("/signup")}
            style={styles.SignUpButton}
          >
            Sign up
          </button>
        </div>
      </form>
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
