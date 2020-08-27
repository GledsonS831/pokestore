import React from "react";
import * as St from "./styles";

const Credits: React.FC = () => {
  return (
    <St.Container>
      <St.MessageContainer>
        <St.HeaderContainer>
          <St.HeaderText>Obrigado por realizar a compra :)</St.HeaderText>
        </St.HeaderContainer>

        <St.MessageMainContainer>
          <St.Message>
            Com essa aplicaçao foi possível realizar uma aplicação com o React.
          </St.Message>
          <St.Message>
            Clique <St.BackLink to="/">aqui</St.BackLink> para reiniciar a
            compra.
          </St.Message>
        </St.MessageMainContainer>
      </St.MessageContainer>
    </St.Container>
  );
};

export default Credits;
