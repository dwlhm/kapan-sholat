import type {
    Meta, StoryObj
} from '@storybook/react';

import Text from "../index"
import { TitleSize } from './text.title';

const meta= {
    title: 'Components/Text/Title',
    component: Text.Title,
    parameters: {
        layout: 'centered'
    },
    tags: [ 'autodocs' ],
    argTypes: {
        color: {
            control: 'color'
        },
        size: {
            options: Object.values(TitleSize),
            mapping: Object.values(TitleSize),
            control: {
                type: "select",
                labels: Object.keys(TitleSize)
            }
        }
    }
} satisfies Meta<typeof Text.Title>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: "Ini Nama Brand Keren",
        size: TitleSize.lg,
        color: "#2e2e2e"
    }
}

export const Secondary: Story = {
    args: {
        children: "Ini Nama Brand Keren",
        size: TitleSize.md,
        color: "#2e2e2e"
    }
}

export const Small: Story = {
    args: {
        children: "Ini Nama Brand Keren",
        size: TitleSize.sm,
        color: "#2e2e2e"
    }
}