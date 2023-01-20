import styled from "styled-components";

export const DivLoading = styled.div`
  width: 20px;
  height: 20px;
  border-bottom: 2px solid var(--green-1);
  border-top: 2px solid var(--green-1);
  border-right: 2px solid var(--green-1);
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
