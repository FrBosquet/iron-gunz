import styled from 'styled-components'

export const Button = styled.button`
  border: 3px solid white;
  color: white;
  border-radius: 6px;
  font-weight: bold;
  background-color: ${props => props.back ? 'red' : 'grey'};
  margin: 5px;
  cursor: pointer;
  &:hover{
    border-color: ${props => props.back ? 'orange' : 'lightGreen'};
    color: ${props => props.back ? 'orange' : 'lightGreen'};
  }
`

Button.defaultProps = {
  back: false
}

Button.displayName = 'Button'