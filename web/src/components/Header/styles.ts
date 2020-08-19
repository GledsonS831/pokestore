import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
export const Container = styled.div`
  display: flex;
  align-items: center;

  padding-left: 300px;
  padding-right: 300px;
  height: 166px;
  /* border: 1px solid black; */
`;

export const InputSearchContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const Logo = styled.img`
  height: 60px;
`;

export const CartShoppingIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  /* border: 1px solid black; */
`;

export const CartShoppingIcon = styled(FiShoppingCart)`
  width: 33px;
  height: 33px;
  color: var(--color-main);
`;


