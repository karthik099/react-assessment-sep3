import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'
import { describe, expect, it } from 'vitest'

describe('App', () => {
 it("render checkbox lists", () => {
    render(<App />);
    expect(screen.getByText(/transfer the checked list/i)).toBeInTheDocument();

    // left list
    expect(screen.getByText(/html/i)).toBeInTheDocument();
    expect(screen.getByText("CSS")).toBeInTheDocument();

    // right list
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Angular")).toBeInTheDocument();
  });

  it("selects items in the list", () => {
    render(<App />);
    const checkbox = screen.getByLabelText("HTML") as HTMLInputElement;
    fireEvent.click(checkbox);

    expect(checkbox.checked).toBe(true);
  });
})