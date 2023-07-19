import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../pages/login';
import { useRouter } from 'next/router';
import "@testing-library/jest-dom/extend-expect";

// Mock the useRouter hook
jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));

describe('Login', () => {
    test('renders login form correctly', () => {
        render(<Login />);

        const emailInput = screen.getByPlaceholderText('Email');
        expect(emailInput).toBeInTheDocument();

        const passwordInput = screen.getByPlaceholderText('Password');
        expect(passwordInput).toBeInTheDocument();

        const signInButton = screen.getByText('Sign in');
        expect(signInButton).toBeInTheDocument();

        const signUpButton = screen.getByText('Sign up');
        expect(signUpButton).toBeInTheDocument();
    });

    test('redirects to admin dashboard on sign in button click', () => {
        const pushMock = jest.fn();
        useRouter.mockImplementationOnce(() => ({
            push: pushMock,
        }));

        render(<Login />);

        const signInButton = screen.getByText('Sign in');
        fireEvent.click(signInButton);

        expect(pushMock).toHaveBeenCalledWith('/admin-dashboard');
    });

    test('redirects to signup page on sign up button click', () => {
        const pushMock = jest.fn();
        useRouter.mockImplementationOnce(() => ({
            push: pushMock,
        }));

        render(<Login />);

        const signUpButton = screen.getByText('Sign up');
        fireEvent.click(signUpButton);

        expect(pushMock).toHaveBeenCalledWith('/signup');
    });
});
