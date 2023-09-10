import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import PagesHome from "./pages.home";
import { BrowserRouter } from "react-router-dom";

describe("<Pages.Home />", () => {

    test("Component dirender", () => {
        render(<PagesHome />, {
            wrapper: BrowserRouter
        })

        // component tampil di screen
        expect(screen.getByTestId("pages-home")).toBeInTheDocument()
    })

    test("Component menampilkan title", () => {

        render(<PagesHome />, {
            wrapper: BrowserRouter
        })

        expect(screen.getByTestId("title")).toBeTruthy()
    })

    test("Component menampilkan 5 waktu sholat", async () => {

        render(<PagesHome />, {
            wrapper: BrowserRouter
        })

        // cek render element waktu sholat (5) + keterangan tempat (1) = 6
        expect(await screen.findAllByTestId("text-base").then(res => res.length)).toBe(6)

        //cek render element deskripsi (5)
        expect(await screen.findAllByTestId("description").then(res => res.length)).toBe(5)
    })
})