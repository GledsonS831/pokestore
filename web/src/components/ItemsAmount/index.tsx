import React from "react";

import * as St from "./styles";

interface ItemsAmountProps {
  amount: number;
}

const ItemsAmount: React.FC<ItemsAmountProps> = ({ amount }) => {
  return (
    <St.Container>
      <St.ItemsAmountContent>
        <St.Amount>{amount}</St.Amount>
      </St.ItemsAmountContent>
    </St.Container>
  );
};

export default ItemsAmount;
