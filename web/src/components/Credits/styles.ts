import styled from "styled-components";
import wallpaper_end from "../../assets/Images/wallpaper_end.png";
import { Link } from "react-router-dom";
export const Container = styled.div`
  background-image: url(${wallpaper_end});
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MessageContainer = styled.div`
  width: 894px;
  height: 446px;
  border-radius: 12px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  width: 894px;
  height: 113px;
  background-color: var(--color-main);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderText = styled.p`
  font-size: 28px;
  @font-face {
    font-family: Roboto;
    src: url("../../assets/Fonts/Roboto-Regular.ttf");
  }
  font-family: Roboto;
  color: white;
`;

export const MessageMainContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Message = styled.p`
  font-size: 24px;
  @font-face {
    font-family: Roboto;
    src: url("../../assets/Fonts/Roboto-Regular.ttf");
  }
  font-family: Roboto;
  font-style: italic;
`;

export const BackLink = styled(Link)`
  text-decoration: none;
  :nth-child(1) {
    color: var(--color-secundary);
    font-weight: bold;
  }
`;
