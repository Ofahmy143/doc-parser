import styled from "styled-components";

export const ButtonWrapper = styled.button`
  font-size: 1.2rem;
  display: flex;
  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
  &:active {
    border: 1px solid rgba(255, 255, 255, 1);
  }
  &:focus {
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
`;

export const ButtonIcon = styled.img`
  max-width: 1.5rem;
  fill: white;
  color: white;
  filter: invert();
  
`;
