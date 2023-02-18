import styled from 'styled-components'

export const Image = styled.img`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  min-width: ${props => props.size}px;
  min-height: ${props => props.size}px;
  object-fit: cover;
  border-radius: 100%;
  background-color: #186AAF25;
`

export const Letter = styled.div`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  min-width: ${props => props.size}px;
  min-height: ${props => props.size}px;
  border-radius: 100%;
  text-transform: uppercase;
  color: #fff;
  background: ${props => props.color};
  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`
