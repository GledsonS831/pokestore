import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  display: grid;
`;

export const ItemsAmountContent = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 25px;
  background: var(--color-secundary);
  border-radius: 100%;
`;

export const Amount = styled.span`
  color: white;
  font-size: 11px;
  
`;
