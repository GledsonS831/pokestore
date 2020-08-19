import styled from "styled-components";

import { FiSearch } from "react-icons/fi";

export const Container = styled.button`
  border: 1px solid var(--color-shadow);
  border-left-width: 0px;
  background-color: white;

  :nth-child(2) {
    color: var(--color-secundary);
  }
  :focus {
    outline: none;
  }

  :hover {
    background-color: var(--color-secundary);
    :nth-child(2) {
      color: white;
    }
    border: none;
  }
`;

export const SearchButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 45px;
  border-color: black;
  :hover {
    background-color: var(--color-secundary);
  }
  :active {
    box-shadow: inset 0px 0px 5px 3px rgba(0, 0, 0, 0.3);
  }
`;

export const ButtonIcon = styled(FiSearch)`
  width: 28px;
  height: 28px;
`;
