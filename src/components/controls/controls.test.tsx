import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Controls from "./Controls";
import { beforeEach, describe, expect, it, vi } from "vitest";

describe("Controls Component", () => {
    const mockTransfer = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("renders both buttons", () => {
        render(<Controls transfer={mockTransfer} count={{ left: 2, right: 3 }} />);
        expect(screen.getByRole("button", { name: "🡲" })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "🡰" })).toBeInTheDocument();
    });

    it("both buttons enabled when left and right counts > 0", () => {
        render(<Controls transfer={mockTransfer} count={{ left: 1, right: 1 }} />);
        expect(screen.getByRole("button", { name: "🡲" })).toBeEnabled();
        expect(screen.getByRole("button", { name: "🡰" })).toBeEnabled();
    });

    it("disables right arrow when left count is 0", () => {
        render(<Controls transfer={mockTransfer} count={{ left: 0, right: 2 }} />);
        expect(screen.getByRole("button", { name: "🡲" })).toBeDisabled();
        expect(screen.getByRole("button", { name: "🡰" })).toBeEnabled();
    });

    it("disables left arrow when right count is 0", () => {
        render(<Controls transfer={mockTransfer} count={{ left: 2, right: 0 }} />);
        expect(screen.getByRole("button", { name: "🡰" })).toBeDisabled();
        expect(screen.getByRole("button", { name: "🡲" })).toBeEnabled();
    });

    it("calls transfer('right') when right button is clicked", () => {
        render(<Controls transfer={mockTransfer} count={{ left: 2, right: 2 }} />);
        const rightBtn = screen.getByRole("button", { name: "🡲" });
        fireEvent.click(rightBtn);
        expect(mockTransfer).toHaveBeenCalledWith("right");
        expect(mockTransfer).toHaveBeenCalledTimes(1);
    });

    it("calls transfer('left') when left button is clicked", () => {
        render(<Controls transfer={mockTransfer} count={{ left: 2, right: 2 }} />);
        const leftBtn = screen.getByRole("button", { name: "🡰" });
        fireEvent.click(leftBtn);
        expect(mockTransfer).toHaveBeenCalledWith("left");
        expect(mockTransfer).toHaveBeenCalledTimes(1);
    });
});