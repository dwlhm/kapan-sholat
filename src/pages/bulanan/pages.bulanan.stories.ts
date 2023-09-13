import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import PagesBulanan from "./pages.bulanan";

const meta = {
    title: 'Pages/Bulanan',
    component: PagesBulanan,
    decorators: [ withRouter ],
    tags: [ 'autodocs' ]
} satisfies Meta<typeof PagesBulanan>

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {}