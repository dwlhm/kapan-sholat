import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import PagesBulanan from "./pages.bulanan";
import { BrowserRouter } from "react-router-dom";
import useCurrentDate from "../../utils/useCurrentDate";

describe("<Bulanan />", () => {
    test("Pages dirender", () => {
        render(<PagesBulanan />, {
            wrapper: BrowserRouter
        })

        expect(screen.getByTestId("pages-bulanan")).toBeInTheDocument()
    })

    test("Title menyesuaikan bulan client side", () => {
        render(<PagesBulanan />, {
            wrapper: BrowserRouter
        })

        // get component
        const component = screen.getByTestId("pages-bulanan")
        
        const currentDate = useCurrentDate()

        expect(screen.getByText(currentDate.month_name)).toBeInTheDocument()
        
        expect(screen.getByText(currentDate.year)).toBeInTheDocument()
    })
})