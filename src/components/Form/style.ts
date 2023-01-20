import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.938rem;
  width: 100%;
  max-width: 18.75rem;

  input {
    border: 0.063rem solid black;
    width: 100%;
    padding: 0.313rem;
    border-radius: 0.313rem;
    border: 0.063rem solid var(--gray-3);
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.188rem;
  }

  .span-info {
    color: var(--black-2);
    font-size: 0.8rem;
  }

  button {
    padding: 0.313rem 0;
    border: 0.063rem solid var(--blue-1);
    border-radius: 0.313rem;
    color: var(--white-1);
    font-weight: bold;
    background-color: var(--blue-1);

    :hover {
      transition: 0.8s;
      background-color: var(--blue-3);
      color: var(--blue-1);
    }
  }
`;
