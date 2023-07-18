import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactUsPage from "../pages/contact-us";

describe("ContactUsPage", () => {
  test("Contact-us page unit test: Test for heading is rendered correctly", () => {
    render(<ContactUsPage />);

    const headingElement = screen.getByText("For inquiries, Please Contact us");
    expect(headingElement).toBeInTheDocument();
  });

  test("Contact-us page unit test: Test for name, email, and message fields", () => {
    render(<ContactUsPage />);

    const nameField = screen.getByLabelText("Name");
    expect(nameField).toBeInTheDocument();

    const emailField = screen.getByLabelText("Email");
    expect(emailField).toBeInTheDocument();

    const messageField = screen.getByLabelText("Message");
    expect(messageField).toBeInTheDocument();

  });

  test("Contact-us page unit test: Test for blank Name field", () => {
    render(<ContactUsPage />);
    const nameField = screen.getByLabelText("Name");
    expect(nameField.value).toBe("");
  });

  test("Contact-us page unit test: Test for valid characters in Name field", () => {
    render(<ContactUsPage />);
    const nameField = screen.getByLabelText("Name");
    const invalidCharacters = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?0-9]/;

    fireEvent.change(nameField, { target: { value: "John Doe" } });
    expect(nameField.value).not.toMatch(invalidCharacters);

    fireEvent.change(nameField, { target: { value: "John2" } });
    expect(nameField.value).toMatch(invalidCharacters);

    fireEvent.change(nameField, { target: { value: "John!" } });
    expect(nameField.value).toMatch(invalidCharacters);
  });

  test("Contact-us page unit test: Test for blank Email field", () => {
    render(<ContactUsPage />);
    const emailField = screen.getByLabelText("Email");
    expect(emailField.value).toBe("");
  });

  test("Contact-us page unit test: Test for valid Email field", () => {
    render(<ContactUsPage />);
    const emailField = screen.getByLabelText("Email");
    const validEmails = [
      "dskunwar@myseneca.ca",
      "dskunwar@gmail.co",
      "dskunwar@test.com",
      "user123@example.com",
    ];

    validEmails.forEach((email) => {
      fireEvent.change(emailField, { target: { value: email } });
      expect(emailField.value).toBe(email);
    });
  });

  test("Contact-us page unit test: Test for invalid Email field", () => {
    render(<ContactUsPage />);
    const emailField = screen.getByLabelText("Email");
    const invalidEmails = [
      "notanemail",
      "invalid@.com",
      "@domain.com",
      "email@domain",
    ];

    const validEmailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

    invalidEmails.forEach((email) => {
      fireEvent.change(emailField, { target: { value: email } });
      expect(emailField.value).not.toMatch(validEmailRegex);
    });
  });

  test("Contact-us page unit test: Test for blank Message field", () => {
    render(<ContactUsPage />);
    const messageField = screen.getByLabelText("Message");
    expect(messageField.value).toBe("");
  });

  test("Contact-us page unit test: Test for submit button", () => {
    render(<ContactUsPage />);
    const submitButton = screen.getByRole("button", { name: /Submit/i });
    expect(submitButton).toBeInTheDocument();
  });

});
