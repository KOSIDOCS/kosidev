import styled, { css } from 'vue-styled-components'

const buttonProps = {
  color: String,
  primary: Boolean
}

const theme = {
  color: '#8800ff'
}

const CButton = styled('a', buttonProps)`
  color: ${props => props.color};
  display: inline-block;
  padding: 0.8rem 0;
  margin-top: 1.3rem;
  width: 9rem;
  background: transparent;
  border: 2px solid white;
  text-decoration: none;
  transition: background 0.6s ease-in-out;
  text-align: center;

  ${props =>
    props.primary &&
    css`
      background: transparent;
      color: black;
      border: 2px solid ${theme.color};
      &:hover {
        background: ${theme.color};
        color: white;
      }
    `}
`

export default CButton
