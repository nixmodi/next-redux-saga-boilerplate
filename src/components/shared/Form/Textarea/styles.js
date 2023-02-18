import styled, { css } from 'styled-components'
// import { color, font } from '../../../../config/styles'

export const StyledTextarea = styled.div`
  display: inline-block;
  width: 100%;
  textarea {
    overflow-y: hidden;
    width: 100%;
    &:focus {
      background: #fff;
    }
  }
`
