import React, { useState } from "react";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z ]*$/.test(value)) {
      setFirstName(value);
    }
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z ]*$/.test(value)) {
      setLastName(value);
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(value) || value === "") {
      setEmail(value);
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const numbersOnlyRegex = /^[0-9]*$/;
    if (numbersOnlyRegex.test(value) || value === "") {
      setPhone(value);
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*\d)(?=.*[A-Z])(?!^\s).{8,}$/;
    if (passwordRegex.test(value) || value === "") {
      setPassword(value);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    const confirmPasswordRegex = /^(?=.*[!@#$%^&*])(?=.*\d)(?=.*[A-Z]).{8,}$/;
    if (confirmPasswordRegex.test(value) || value === "") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here
    console.log("Signup form submitted");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.center}>Sign Up Page</h2>
        <div style={styles.formGroup}>
          <label>
            <input
              type="text"
              value={firstName}
              onChange={handleFirstNameChange}
              placeholder="First Name"
              style={styles.inputName}
              required
            />
          </label>
          <label>
            <input
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
              placeholder="Last Name"
              style={{ ...styles.inputName, marginLeft: "4%" }}
              required
            />
          </label>
        </div>
        <div style={styles.formGroup}>
          <label>
            <input
              type="email"  // Change the type to "email"
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
              type="phone"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Phone number"
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
        <div style={styles.formGroup}>
          <label>
            <input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="Confirm Password"
              style={styles.input}
              required
            />
          </label>
        </div>
        <div style={styles.center}>
          <button type="submit" style={styles.button}>
            Sign Up
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
};

export default Signup;