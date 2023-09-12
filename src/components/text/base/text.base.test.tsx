import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import TextBase from "./text.base";

describe('<Text.Base />', () => {

    test("Component dirender", () => {

        render(<TextBase>Hai</TextBase>)

        // cek component di screen
        expect(screen.getByTestId("text-base")).toBeInTheDocument()
    })

    test("component render sesuai props", () => {

        render(<TextBase
            color="gray-900"
            fontSize="lg">
            Maghrib
        </TextBase>)

        // get component di screen
        const component = screen.getByTestId("text-base")

        // cek color
        expect(component.classList[0]).toBe(`text-gray-900`)

        // cek font size
        expect(component.classList[1]).toBe(`text-lg`)

    })
})