import StyledButton from "./style";

interface ButtonTypes {
  children: string | JSX.Element;
  color: string;
}

function Button({ children, color, ...rest }: ButtonTypes) {
  return (
    <StyledButton color={color} {...rest}>
      {children}
    </StyledButton>
  );
}

export default Button;
