/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Greeting } from "./Greeting";

describe("<Greeting />", () => {
    test('renders "Hello World" as a text', () => {
        // Arrange.
        render(<Greeting />);
        // Act.  For this example, nothing.
        // Assert
        const helloworldElement = screen.getByText("Hello World!");
        expect(helloworldElement).toBeInTheDocument();
    });

    test('renders "good to see you" if the button was NOT clicked', () => {
        render(<Greeting />);
        const goodElement = screen.getByText("good to see you", { exact: false });
        expect(goodElement).toBeInTheDocument();
    });

    test('renders "Changed!" if the button was clicked', () => {
        // Arrange.
        render(<Greeting />);
        // Act
        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement);
        // Assert
        const outputElement = screen.getByText("Changed!");
        expect(outputElement).toBeInTheDocument();
    });

    test(`does not render "good to see 
        you" if the button was clicked`, () => {
        // Arrange.
        render(<Greeting />);
        // Act
        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement);
        // Assert
        const outputElement = screen.queryByText("good to see you", {
            exact: false
        });
        expect(outputElement).toBeNull();
    });
});







