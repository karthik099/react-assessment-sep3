import { beforeEach, describe, expect, it, vi } from "vitest";
import CheckedList from "./CheckedList";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

const mockItems = ['HTML', 'Javascript', 'Typescript', 'CSS'];
const mockOnSelect = vi.fn();

describe("CheckedList Component", () => {

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("renders all items from list", () => {
        const { getByLabelText } = render(
            <CheckedList list={mockItems} direction="left" onSelect={mockOnSelect} />
        );

        expect(getByLabelText("HTML")).toBeInTheDocument();
        expect(getByLabelText("CSS")).toBeInTheDocument();
    });

    it("checkboxes are unchecked initially", () => {
        const { getByRole } = render(
            <CheckedList list={mockItems} direction="left" onSelect={vi.fn()} />
        );
        const checkbox = getByRole("checkbox", { name: "HTML" });
        expect(checkbox).not.toBeChecked();
    });

    it("calls onSelect when clicked", () => {
        const mockOnSelect = vi.fn();
        const { getByRole } = render(
            <CheckedList list={mockItems} direction="left" onSelect={mockOnSelect} />
        );

        const checkbox = getByRole("checkbox", { name: "HTML" });
        fireEvent.click(checkbox);

        expect(mockOnSelect).toHaveBeenCalledWith("HTML", "left");
        expect(mockOnSelect).toHaveBeenCalledTimes(1);
    });
});