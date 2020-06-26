import React from 'react'
// import { action } from '@storybook/addon-actions'
import Button from '../components/Button'

export default {
  title: 'Button',
  component: Button,
}

export const Text = () => <Button text="Hello" />

export const Emoji = () => (
  <Button text=" 😀 😎 👍 💯">
    <span role="img" aria-label="so cool"></span>
  </Button>
)
