import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import ErrorPage from '../Component/Errorpage';


describe("Error page", ()=>{
    it("matches snapshot",()=>{
        const {container} = render(<ErrorPage />);
        expect(container).toMatchSnapshot();
    })
})