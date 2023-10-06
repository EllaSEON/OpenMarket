import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../common/Button/Button";
import ProductInp from "../common/ProductInp/ProductInp";
import regExp from "../../utils/regExp";
import ImageUpload from "./ImageUpload";
import RenderErrorMsg from "../common/AmountBtn/RenderErrorMsg/RenderErrorMsg";
import useCreateRegisterProduct from "../../hooks/queries/useCreateRegisterProduct";
import { SellerRegister } from "../../types/SellerRegister.type";
import { useAppSelector } from "../../store/hooks";

function RegistrationForm() {
  const token = useAppSelector((state) => state.login.token) || "";
  const userType = useAppSelector((state) => state.login.userType);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SellerRegister>();

  const registrationMutation = useCreateRegisterProduct();

  const onSubmit = (data: SellerRegister) => {
    if (userType === "SELLER") {
      const productData = {
        token: token,
        product_name: data.product_name,
        image: data.image[0],
        price: data.price,
        shipping_method: data.shipping_method,
        shipping_fee: data.shipping_fee,
        stock: data.stock,
        product_info: data.product_info,
      };
      registrationMutation.mutate(productData);
    }
  };

  return (
    <form style={{ marginLeft: "5rem" }} onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: "flex" }}>
        <ProductInfoWrapper>
          <ImageUpload register={register} />
        </ProductInfoWrapper>
        <ProductInpWrapper>
          <ProductInp
            type="text"
            htmlFor="product_name"
            labelText="상품명"
            width="35rem"
            placeholder="20자 이내로 입력"
            {...register("product_name", {
              required: "필수 정보입니다.",
              maxLength: 20,
            })}
          />
          {RenderErrorMsg(errors.product_name)}
          <ProductInp
            type="number"
            htmlFor="productPrice"
            labelText="판매가"
            placeholder="숫자만 입력"
            {...register("price", {
              required: "필수 정보입니다.",
              pattern: regExp.PRICE_REGEX,
            })}
          />
          {RenderErrorMsg(errors.price)}
          <LabelTxt>배송 방법</LabelTxt>
          <InputRadioGroup>
            <InputRadio
              type="radio"
              id="parcel"
              value="PARCEL"
              {...register("shipping_method")}
              defaultChecked
            />
            <InpRadioLabel htmlFor="parcel">택배,소포,등기</InpRadioLabel>
            <InputRadio
              type="radio"
              id="delivery"
              value="DELIVERY"
              {...register("shipping_method")}
            />
            <InpRadioLabel htmlFor="delivery">직접배송(화물배달)</InpRadioLabel>
          </InputRadioGroup>
          <ProductInp
            type="number"
            htmlFor="shipping_fee"
            labelText="기본 배송비"
            placeholder="숫자만 입력"
            {...register("shipping_fee", {
              required: "필수 정보입니다.",
              pattern: regExp.PRICE_REGEX,
            })}
          />
          {RenderErrorMsg(errors.shipping_fee)}
          <ProductInp
            type="number"
            htmlFor="stock"
            labelText="재고"
            placeholder="숫자만 입력"
            {...register("stock", {
              required: "필수 정보입니다.",
              pattern: regExp.STOCK_REGEX,
            })}
          />
          {RenderErrorMsg(errors.stock)}
        </ProductInpWrapper>
      </div>
      <EditorWrapper>
        <LabelTxt>상품 상세 정보</LabelTxt>
        <Editor
          {...register("product_info", {
            required: "필수 정보입니다.",
          })}
        />
      </EditorWrapper>
      {RenderErrorMsg(errors.product_info)}
      <SaveBtnWrapper>
        <Button type="button" size="ms" color="white">
          취소
        </Button>
        <Button type="submit" size="ms">
          저장하기
        </Button>
      </SaveBtnWrapper>
    </form>
  );
}

export default RegistrationForm;

const ProductInfoWrapper = styled.div`
  display: flex;
`;

export const LabelTxt = styled.p`
  font-size: 1.6rem;
  line-height: 2rem;
  margin: 1.5rem 0 1rem 0;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const InpRadioLabel = styled.label`
  width: 22rem;
  height: 5.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 1rem;
  font-size: 1.6rem;
  cursor: pointer;
  transition: background-color 0.3s;
`;

export const InputRadio = styled.input`
  display: none;
  &:checked + label {
    background-color: ${({ theme }) => theme.colors.green};
    color: white;
  }
`;

const ProductInpWrapper = styled.div`
  margin-left: 4rem;
`;

export const InputRadioGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const Editor = styled.textarea`
  padding: 2rem;
  width: 100%;
  height: 50rem;
  background: #f2f2f2;
  border-radius: 10px;
  resize: none;
  font-size: 3rem;
`;

const EditorWrapper = styled.div`
  margin-top: 4rem;
`;

const SaveBtnWrapper = styled.div`
  margin: 5rem auto;
  float: right;
`;
