import { describe, expect, test } from "vitest";
import { getByText, render, screen } from "@testing-library/react";
import Text from "..";
import { TitleSize } from "./text.title";

describe('<Text.Title />', () => {
    
    const titleParam = "Hai"   

    test('Component menampilkan title yang sesuai', () => {
        const { container } = render(
            <Text.Title
                color="#2e2e2e"
                size={TitleSize.lg}
                >{titleParam}</Text.Title>
        )
        expect(container.innerText).toBe("Hai")
    })
    
})