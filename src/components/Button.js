import React from 'react'
import styled from 'styled-components'

export default function Button({ text }) {
  return <StyledButton>{text}</StyledButton>
}

const StyledButton = styled.button`
  background: var(--red);
  color: var(--textcolor);
  border: none;
  padding: 10px;

  &:disabled {
    background: darkslategray;
    color: gray;
  }
`
