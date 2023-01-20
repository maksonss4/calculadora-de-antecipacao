import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 300px;

  input {
    border: 1px solid black;
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid var(--gray-3);
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .span-info {
    color: var(--black-2);
    font-size: 0.8rem;
  }

  button {
    padding: 5px 0;
    border: 1px solid var(--blue-1);
    border-radius: 5px;
    color: white;
    font-weight: bold;
    background-color: var(--blue-1);

    :hover {
      transition: 0.8s;
      background-color: var(--blue-3);
      color: var(--blue-1);
    }
  }
`;
