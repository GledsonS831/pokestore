import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "../../../../src/components/Options/styles";
import centered from "@storybook/addon-centered/react";

storiesOf("ButtonOptions", module)
  .addDecorator(centered)
  .add("Button", () => <Button />);
