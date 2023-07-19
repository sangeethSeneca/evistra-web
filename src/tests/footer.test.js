import React from "react";
import { render } from "@testing-library/react";
import Footer from "../components/Footer";
import "@testing-library/jest-dom/extend-expect";

describe("Footer", () => {
    test("renders the footer component correctly", () => {
        const { getByTestId } = render(<Footer />);
        const footer1 = getByTestId("footer-1");
        const footer2 = getByTestId("footer-2");

        expect(footer1).toBeInTheDocument();
        expect(footer2).toBeInTheDocument();
    });
});
