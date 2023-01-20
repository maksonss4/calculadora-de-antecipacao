import styled from "styled-components";

export const Li = styled.li`
  display: flex;
  gap: 0.4rem;

  p {
    color: var(--blue-2);
  }

  span {
    color: var(--blue-2);
    font-weight: bold;
  }

  input {
    width: 3rem;
    border: 0.125rem solid var(--gray-3);
    border-radius: 0.313rem;
    padding: 0 0.313rem;
  }
`;
