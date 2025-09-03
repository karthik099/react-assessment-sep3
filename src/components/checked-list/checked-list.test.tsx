import { describe, expect, it } from "vitest";
import CheckedList from "./checked-list";
import { render } from "@testing-library/react";


const mockLeft = ['HTML', 'Javascript', 'Typescript', 'CSS'];
const mockRight = ['React', 'Remix', 'Next', 'Angular'];


describe('Checked list',()=>{
    it("render product card", () => {
        render(<CheckedList list={mockLeft} direction={'left'} onSelect={()=>{}} />)
        expect(screen.getByText(/html/i)).toBeInTheDocument();
    })
})