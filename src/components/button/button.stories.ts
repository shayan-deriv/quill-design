import type { Meta, StoryObj } from '@storybook/react'
import Button from '.'
const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    size: 'sm',
    variant: 'primary',
    colorStyle: 'coral',
    disabled: false,
  },
}
