import StyledButton from "./style";

interface ButtonTypes {
  children: string | JSX.Element;
  color?: string;
  size: string;
  disabled?: boolean;
}

function Button({ children, color, size, disabled, ...rest }: ButtonTypes) {
  return (
    <StyledButton color={color} size={size} disabled={disabled} {...rest}>
      {children}
    </StyledButton>
  );
}

export default Button;
