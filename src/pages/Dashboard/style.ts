import styled from "styled-components";
import { InputNumber } from "primereact/inputnumber";

export const DivContainer = styled.div`
  padding: 0 1rem;
  width: 100%;
`;

export const DashboardContainer = styled.div`
  max-width: 45rem;
  width: 100%;
  position: relative;
  border: 0.125rem solid var(--gray-2);
  border-radius: 0.313rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (min-width: 34.375rem) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 1.8rem 0.625rem 1.25rem;

  @media (min-width: 34.375rem) {
    padding: 1.875rem;
    width: 55%;
  }

  h1 {
    font-size: 1.5rem;
    color: var(--black-1);
    font-weight: bold;
    text-align: center;
  }
`;

export const DivResult = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--gray-1);
  padding: 1.25rem 0.625rem;
  align-items: center;

  @media (min-width: 34.375rem) {
    padding: 3.75rem 1.875rem 1.875rem;
    width: 45%;
  }

  h2 {
    font-size: 1rem;
    color: var(--blue-1);
    font-weight: 700;
    border-bottom: 0.063rem solid var(--blue-1);
    width: 100%;
    max-width: 18.75rem;
    padding-bottom: 0.313rem;
    max-width: 18.75rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    max-width: 18.75rem;

    @media (min-width: 34.375rem) {
      width: 100%;
      gap: 1.875rem;
      padding-top: 1rem;
    }
  }
`;

export const ButtonLeave = styled.button`
  display: flex;
  position: absolute;
  right: 0.313rem;
  top: 0.313rem;
  border: 0.063rem solid black;
  border-radius: 0.313rem;
  padding: 0.125rem;
`;
