import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../common/Button/Button";
import ProductInp from "../common/ProductInp/ProductInp";
import regExp from "../../utils/regExp";
import ImageUpload from "./ImageUpload";
import RenderErrorMsg from "../auth/RenderErrorMsg/RenderErrorMsg";

export interface FormData {
  productImg: FileList;
  productName: string;
  productPrice: number;
  deliveryType: string;
  shippingFee: number;
  stockNo: number;
  editor: string;
}

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form style={{ marginLeft: "5rem" }} onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: "flex" }}>
        <ProductInfoWrapper>
          <ImageUpload register={register} />
        </ProductInfoWrapper>
        <ProductInpWrapper>
          <ProductInp
            type="text"
            htmlFor="productName"
            labelText="상품명"
            width="35rem"
            placeholder="20자 이내로 입력"
            {...register("productName", {
              required: "필수 정보입니다.",
              maxLength: 20,
            })}
          />
          {RenderErrorMsg(errors.productName)}
          <ProductInp
            type="number"
            htmlFor="productPrice"
            labelText="판매가"
            placeholder="숫자만 입력"
            {...register("productPrice", {
              required: "필수 정보입니다.",
              pattern: regExp.PRICE_REGEX,
            })}
          />
          {RenderErrorMsg(errors.productPrice)}
          <LabelTxt>배송 방법</LabelTxt>
          <InputRadioGroup>
            <InputRadio
              type="radio"
              id="parcel"
              value="PARCEL"
              {...register("deliveryType")}
              defaultChecked
            />
            <InpRadioLabel htmlFor="parcel">택배,소포,등기</InpRadioLabel>
            <InputRadio
              type="radio"
              id="delivery"
              value="DELIVERY"
              {...register("deliveryType")}
            />
            <InpRadioLabel htmlFor="delivery">직접배송(화물배달)</InpRadioLabel>
          </InputRadioGroup>
          <ProductInp
            type="number"
            htmlFor="shippingFee"
            labelText="기본 배송비"
            placeholder="숫자만 입력"
            {...register("shippingFee", {
              required: "필수 정보입니다.",
              pattern: regExp.PRICE_REGEX,
            })}
          />
          {RenderErrorMsg(errors.shippingFee)}
          <ProductInp
            type="number"
            htmlFor="stockNo"
            labelText="재고"
            placeholder="숫자만 입력"
            {...register("stockNo", {
              required: "필수 정보입니다.",
              pattern: regExp.STOCK_REGEX,
            })}
          />
          {RenderErrorMsg(errors.stockNo)}
        </ProductInpWrapper>
      </div>
      <EditorWrapper>
        <LabelTxt>상품 상세 정보</LabelTxt>
        <Editor
          {...register("editor", {
            required: "필수 정보입니다.",
          })}
        />
      </EditorWrapper>
      {RenderErrorMsg(errors.shippingFee)}
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
