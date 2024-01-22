import styled from "styled-components";

const Input = styled.input`
  border: 1px solid var(--color-gray-300);
  background-color: var(--color-gray-0);
  border-radius: var(--border-radius-sm);
  margin: 0rem 1rem;
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
  &:hover {
    background-color: var(--color-blue-100);
  }
`;

export default Input;
