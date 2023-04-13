import React from "react";
import StyledButton from "./style";

interface ButtonTypes {
  type: "button" | "submit" | "reset";
  children: string | JSX.Element;
  color?: string;
  size: "lg" | "md" | "ms" | "s";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({
  type,
  children,
  color,
  size,
  disabled,
  onClick,
  ...rest
}: ButtonTypes) {
  return (
    <StyledButton
      type={type}
      color={color}
      size={size}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
