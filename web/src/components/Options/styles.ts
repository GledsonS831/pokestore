import styled from "styled-components";

export const Container = styled.div`
  height: 65px;

  background: #2c1266;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const linkContainer = styled.a``;

export const Button = styled.div`
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2c1266;
  cursor: pointer;
  :hover {
    background: var(--color-greenEffect);
    margin-bottom: 20px;
    padding-top: 20px;
  }
  transition-duration: 0.3s;
`;

export const Text = styled.p`
  color: white;
  @font-face {
    font-family: Ubuntu;
    src: url("../../assets/Fonts/UbuntuCondensed-Regular.ttf");
  }
  font-family: Ubuntu;
  font-size: 24px;
  padding-left: 40px;
  padding-right: 40px;
`;
