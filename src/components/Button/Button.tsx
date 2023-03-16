import StyledButton from "./style";

interface ButtonTypes {
  children: string | JSX.Element;
  color?: string;
  size: string;
}

function Button({ children, color, size, ...rest }: ButtonTypes) {
  return (
    <StyledButton color={color} size={size} {...rest}>
      {children}
    </StyledButton>
  );
}

export default Button;
