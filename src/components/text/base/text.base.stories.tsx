import type { Meta, StoryObj } from "@storybook/react";

import textBase from "./text.base";

const meta = {
    title: "Components/Text/Base",
    component: textBase,
    tags: ["autodocs"],
    parameters: {
        layout: "centered"
    }
} satisfies Meta<typeof textBase>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: "Ini teks Panjang"
    }
}

export const Hero: Story = {
    args: {
        children: "18:00",
        fontSize: "text-2xl",
        fontWeight: "font-semibold",
        textAlign: "center"
    }
}