import styled from 'styled-components';

export default styled.button`
  background: none;
  border: 1px solid ${props => props.theme.colors.primary};
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.paddings.small};
  border-radius: 4px;
  outline: none;

  &:hover {
    opacity: 0.5;
  }

  &:active {
    opacity: 0.5;
  }

  &:disabled {
    opacity: 0.2;
  }

  & + & {
    margin-left: ${props => props.theme.margins.small};
  }
`;
