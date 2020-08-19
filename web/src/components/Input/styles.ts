import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  width: 626px;
  height: 45px;
  margin-right: 36px;
`;

export const Search = styled.input`
  padding-left: 19px;
  border: 1px solid var(--color-shadow);
  border-right: none;
  color: var(--color-shadowPink);
  :focus,
  :active {
    outline: none;
  }
  width: 576px;

  ::placeholder {
    color: var(--color-main);
  }
`;

export const IconButton = styled.img``;
