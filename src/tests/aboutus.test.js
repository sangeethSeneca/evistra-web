import React from "react";
import { render } from "@testing-library/react";
import AboutUs from "../pages/about-us";
import "@testing-library/jest-dom/extend-expect";

// Mock the image source

describe("AboutUs component", () => {
    test("renders the component", () => {
        render(<AboutUs />);
    });

    test("displays the company logo", () => {
        const { getByAltText } = render(<AboutUs />);
        const logoElement = getByAltText("Company Logo");
        expect(logoElement).toBeInTheDocument();
    });

    test("displays the company motto", () => {
        const { getByText } = render(<AboutUs />);
        const mottoElement = getByText("Dedicated to providing high-quality products and services.");
        expect(mottoElement).toBeInTheDocument();
        expect(mottoElement).toHaveStyle("font-size: 40px");
        expect(mottoElement).toHaveStyle("font-weight: bold");
    });


    test("displays the Thank you text", () => {
        const { getByText } = render(<AboutUs />);
        const textailElement = getByText("Thank you for visiting our website. We look forward to serving you!");
        expect(textailElement).toBeInTheDocument();
        expect(textailElement).toHaveStyle("font-size: 20px");
        expect(textailElement).toHaveStyle("font-weight: bold");
    });
});
