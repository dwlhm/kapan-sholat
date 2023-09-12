import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6"

import PagesHome from "./pages.home";
const meta = {
    title: 'Pages/Home',
    component: PagesHome,
    decorators: [ withRouter ],
    tags: [ 'autodocs' ]
} satisfies Meta<typeof PagesHome>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}