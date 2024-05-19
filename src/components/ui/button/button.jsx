import React, { forwardRef } from "react";
import { StyledButton } from "./styles";

const Button = forwardRef(({ children, minWidth, link, className, ...restProps }, ref) => {
  return (
    <StyledButton
      ref={ ref }
      $minWidth={ minWidth }
      {...(link ? { href: link } : { as: "button", type: "button" })}
      className={ className }
      { ...restProps }
    >
      { children }
    </StyledButton>
  );
});

export default Button;
