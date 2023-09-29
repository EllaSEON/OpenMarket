import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../common/Button/Button";
import ProductInp from "../common/ProductInp/ProductInp";
import regExp from "../../utils/regExp";
import ImageUpload from "./ImageUpload";

export interface FormData {
  productImg: FileList;
  productName: string;
  productPrice: number;
  shippingFee: number;
  stockNo: number;
  editor: string;
}

function RegistrationForm() {
  const { register, handleSubmit } = useForm<FormData>();

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
            {...register("productName", { required: true, maxLength: 20 })}
          />
          <ProductInp
            type="number"
            htmlFor="productCost"
            labelText="판매가"
            placeholder="숫자만 입력"
            {...register("productPrice", {
              required: true,
              pattern: regExp.PRICE_REGEX,
            })}
          />

          <LabelTxt>배송 방법</LabelTxt>
          <Button type="button" size="ms">
            택배,소포,등기
          </Button>
          <Button type="button" size="ms" color="white">
            직접배송
          </Button>

          <ProductInp
            type="number"
            htmlFor="shippingFee"
            labelText="기본 배송비"
            placeholder="숫자만 입력"
            {...register("shippingFee", {
              required: true,
              pattern: regExp.PRICE_REGEX,
            })}
          />
          <ProductInp
            type="number"
            htmlFor="stockNo"
            labelText="재고"
            placeholder="숫자만 입력"
            {...register("stockNo", {
              required: true,
              pattern: regExp.STOCK_REGEX,
            })}
          />
        </ProductInpWrapper>
      </div>
      <EditorWrapper>
        <LabelTxt>상품 상세 정보</LabelTxt>
        <Editor
          {...register("editor", {
            required: true,
          })}
        />
      </EditorWrapper>
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

const ProductInpWrapper = styled.div`
  margin-left: 4rem;
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
