import React from "react";

import * as St from "./styles";

const Options: React.FC = () => {
  return (
    <St.Container>
      <St.linkContainer target="blank">
        <St.Button>
          <St.Text>Pokémon</St.Text>
        </St.Button>
      </St.linkContainer>
      <St.linkContainer target="blank">
        <St.Button>
          <St.Text>Sobre o Desenvolvedor</St.Text>
        </St.Button>
      </St.linkContainer>
      <St.linkContainer target="blank">
        <St.Button>
          <St.Text>Ofertas</St.Text>
        </St.Button>
      </St.linkContainer>
    </St.Container>
  );
};

export default Options;
