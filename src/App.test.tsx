import { describe, test, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import App from "./App"

describe('<App />', () => {
    test('App mounts properly', () => {
        const wrapper = render(<App />, {
            wrapper: BrowserRouter
        })
        expect(wrapper).toBeTruthy()

        // Get by h1
        const h1 = wrapper.container.querySelector('h1')
        expect(h1?.textContent).toBe('Vite + React')

    })

    test('Click the Tentang router link',  async () => {
        render(<App />, {
            wrapper: BrowserRouter
        })

        expect(screen.getByTestId('tentang-link')).toBeInTheDocument()

        const user = userEvent.setup()
        const tentang = vi.spyOn(user, 'click')
        const tentangLink = screen.getByTestId('tentang-link')

        await user.click(tentangLink)
        expect(tentang).toHaveBeenCalledTimes(1)
    })
})