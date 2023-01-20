import styled from "styled-components";

export const DivLoading = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-bottom: 0.125rem solid var(--green-1);
  border-top: 0.125rem solid var(--green-1);
  border-right: 0.125rem solid var(--green-1);
  border-radius: 100%;
  animation: rotatee 1s linear infinite;

  @keyframes rotatee {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
