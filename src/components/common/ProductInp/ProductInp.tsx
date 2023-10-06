import styled from "styled-components";
import React from "react";

interface ProductInpProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  labelText: string;
  width?: string;
  htmlFor: string;
  placeholder: string;
}

/**
 * @example
 * <ProductInp labelTxt='판매가' width='35rem'htmlFor='ProductName'/>
 */

const ProductInp = React.forwardRef<HTMLInputElement, ProductInpProps>(
  (
    { type, htmlFor, labelText, width, placeholder, ...props }: ProductInpProps,
    ref
  ) => {
    return (
      <LabelWrapper>
        <ProductInpLabel htmlFor={htmlFor}>{labelText}</ProductInpLabel>
        <ProductCostInp
          ref={ref}
          type={type}
          id={htmlFor}
          width={width}
          placeholder={placeholder}
          {...props}
        />
      </LabelWrapper>
    );
  }
);

export default ProductInp;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ProductInpLabel = styled.label`
  margin: 1.5rem 0 1rem 0;
  font-size: 1.6rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const ProductCostInp = styled.input<{ width?: string }>`
  width: ${({ width }) => width || "20rem"};
  height: 5.4rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  padding: 1.6rem;
  font-size: 1.6rem;
  line-height: 2rem;
  ::placeholder {
    font-size: 1.6rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;
