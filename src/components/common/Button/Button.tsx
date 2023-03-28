import StyledButton from "./style";

interface ButtonTypes {
  type: "button" | "submit" | "reset";
  children: string | JSX.Element;
  color?: string;
  size: "lg" | "md" | "ms" | "s";
  disabled?: boolean;
}

function Button({
  type,
  children,
  color,
  size,
  disabled,
  ...rest
}: ButtonTypes) {
  return (
    <StyledButton
      type={type}
      color={color}
      size={size}
      disabled={disabled}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
