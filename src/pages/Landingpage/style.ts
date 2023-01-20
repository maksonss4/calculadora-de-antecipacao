import styled from "styled-components";

export const LandingPageContainer = styled.div`
  background: rgb(181, 181, 181);
  background: linear-gradient(
    90deg,
    rgba(181, 181, 181, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 2rem;

  h1 {
    font-size: 3rem;
    color: var(--blue-1);
    text-align: center;
  }

  p {
    font-size: 2rem;
    color: var(--blue-1);
    text-align: center;
  }

  span {
    font-size: 1.3rem;
    color: var(--black-1);
    text-align: center;
  }

  .box-1 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 31.25rem;
  }

  .box-2 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 31.25rem;
  }

  a {
    border: 0.063rem solid var(--blue-1);
    border-radius: 0.313rem;
    padding: 0.313rem;
    text-align: center;
    font-weight: bold;
    color: var(--blue-1);
    max-width: 18.75rem;
    width: 100%;
    margin: 0 auto;

    :hover {
      transition: 0.7s;
      background-color: var(--white-1);
    }
  }
`;
