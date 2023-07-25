import React from "react";
import {
  render,
  fireEvent
} from "@testing-library/react";
import Signup from "../pages/signup";

describe("Signup component", () => {
  test("Signup page unit test: First Name Field", () => {
    const { getByPlaceholderText } = render(< Signup />);

    const firstNameInput = getByPlaceholderText("First Name");
    fireEvent.change(firstNameInput, { target: { value: "Dilip Singh" } });
    expect(firstNameInput.value).toBe("Dilip Singh");

  });

  test("First Name: Test for character check", () => {
    const { getByPlaceholderText } = render(< Signup />);

    const firstNameInput = getByPlaceholderText("First Name");
    fireEvent.change(firstNameInput, { target: { value: "_Dilip$ Singh" } });
    expect(firstNameInput.value).toBe("");
  });

  test("First Name: Test for number", () => {
    const { getByPlaceholderText } = render(< Signup />);

    const firstNameInput = getByPlaceholderText("First Name");
    fireEvent.change(firstNameInput, { target: { value: "Dilip123 Singh" } });
    expect(firstNameInput.value).toBe("");

  });

  test("Signup page unit test: Last Name Field", () => {
    const { getByPlaceholderText } = render(< Signup />);

    // Test for Last Name Field
    const lastNameInput = getByPlaceholderText("Last Name");
    fireEvent.change(lastNameInput, { target: { value: "Kunwar" } });
    expect(lastNameInput.value).toBe("Kunwar");

  });

  test("Last Name: Test for special characters", () => {
    const { getByPlaceholderText } = render(< Signup />);

    // Test for Last Name Field
    const lastNameInput = getByPlaceholderText("Last Name");
    fireEvent.change(lastNameInput, { target: { value: "Kunwar@" } });
    expect(lastNameInput.value).toBe("");

  });

  test("Last Name: Test for number", () => {
    const { getByPlaceholderText } = render(< Signup />);

    const lastNameInput = getByPlaceholderText("Last Name");
    fireEvent.change(lastNameInput, { target: { value: "124Kunwar" } });
    expect(lastNameInput.value).toBe("");

  });

  test("Valid Email Address", () => {
    const { getByPlaceholderText } = render(< Signup />);

    const emailInput = getByPlaceholderText("Email");
    fireEvent.change(emailInput, { target: { value: "dskunwar@myseneca.com" } });
    expect(emailInput.value).toBe("dskunwar@myseneca.com");
  });

  test("Email Address: Test for Space", () => {
    const { getByPlaceholderText } = render(< Signup />);

    const emailInput = getByPlaceholderText("Email");
    fireEvent.change(emailInput, { target: { value: "dskunwar@ myseneca.com" } });
    expect(emailInput.value).toBe("");
  });

  test("Email Address: Test for Special Characters", () => {
    const { getByPlaceholderText } = render(< Signup />);

    const emailInput = getByPlaceholderText("Email");
    fireEvent.change(emailInput, { target: { value: "ds@kun.war@myse¥neca.com" } });
    expect(emailInput.value).toBe("");

  });

  test("Valid Phone Number", () => {
    const { getByPlaceholderText } = render(< Signup />);

    const phoneInput = getByPlaceholderText("Phone number");
    fireEvent.change(phoneInput, { target: { value: "123456789" } });
    expect(phoneInput.value).toBe("123456789");
  });

  test("Phone Number: Test for Alphabet Characters", () => {
    const { getByPlaceholderText } = render(< Signup />);

    const phoneInput = getByPlaceholderText("Phone number");
    fireEvent.change(phoneInput, { target: { value: "123456789A" } });
    expect(phoneInput.value).toBe("");
  });

  test("Phone Number: Test for Special Characters", () => {
    const { getByPlaceholderText } = render(< Signup />);

    const phoneInput = getByPlaceholderText("Phone number");
    fireEvent.change(phoneInput, { target: { value: "_12345%6789" } });
    expect(phoneInput.value).toBe("");
  });

  test("Phone Number: Test for Space", () => {
    const { getByPlaceholderText } = render(< Signup />);

    const phoneInput = getByPlaceholderText("Phone number");
    fireEvent.change(phoneInput, { target: { value: "1234 56789" } });
    expect(phoneInput.value).toBe("");
  });

  test("Valid Password", () => {
    const { getByPlaceholderText } = render(< Signup />);

    const passwordInput = getByPlaceholderText("Password");
    fireEvent.change(passwordInput, { target: { value: "Password!123" } });
    expect(passwordInput.value).toBe("Password!123");
  });

  test("Password: Without Special Character test", () => {
    const { getByPlaceholderText } = render(< Signup />);

    const passwordInput = getByPlaceholderText("Password");
    fireEvent.change(passwordInput, { target: { value: "Password123" } });
    expect(passwordInput.value).toBe("");
  });

  test("Password: Without Digit", () => {
    const { getByPlaceholderText } = render(< Signup />);

    const passwordInput = getByPlaceholderText("Password");
    fireEvent.change(passwordInput, { target: { value: "Password!" } });
    expect(passwordInput.value).toBe("");
  });

  test("Password: Length Less than 8 Characters test", () => {
    const { getByPlaceholderText } = render(< Signup />);

    const passwordInput = getByPlaceholderText("Password");
    fireEvent.change(passwordInput, { target: { value: "pass" } });
    expect(passwordInput.value).toBe("");
  });

  test("Password: Starts with Space test", () => {
    const { getByPlaceholderText } = render(< Signup />);

    const passwordInput = getByPlaceholderText("Password");
    fireEvent.change(passwordInput, { target: { value: " Password!123" } });
    expect(passwordInput.value).toBe("");
  });

  test("Password: Without Upper Case Letter", () => {
    const { getByPlaceholderText } = render(< Signup />);

    const passwordInput = getByPlaceholderText("Password");
    fireEvent.change(passwordInput, { target: { value: "password!123" } });
    expect(passwordInput.value).toBe("");
  });

  test("Valid Confirm Password", () => {
    const { getByPlaceholderText } = render(< Signup />);

    const confirmPasswordInput = getByPlaceholderText("Confirm Password");
    fireEvent.change(confirmPasswordInput, { target: { value: "Password!123" } });
    expect(confirmPasswordInput.value).toBe("Password!123");
  });

  test("Confirm Password: Test for Starts with Space", () => {
    const { getByPlaceholderText } = render(< Signup />);

    const confirmPasswordInput = getByPlaceholderText("Confirm Password");
    fireEvent.change(confirmPasswordInput, { target: { value: " Password!12345" } });
    expect(confirmPasswordInput.value).toBe(" Password!12345");
  });

  test("Confirm Password: Test for Space Except Beginning and End", () => {
    const { getByPlaceholderText } = render(< Signup />);

    const confirmPasswordInput = getByPlaceholderText("Confirm Password");
    fireEvent.change(confirmPasswordInput, { target: { value: "Password! 123 " } });
    expect(confirmPasswordInput.value).toBe("Password! 123 ");
  });

});