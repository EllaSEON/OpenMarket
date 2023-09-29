import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../common/Button/Button";
import IconImg from "../../assets/images/icon-img.svg";
import ProductInp from "../common/ProductInp/ProductInp";
import regExp from "../../utils/regExp";

type FormData = {
  productImg: FileList;
  productName: string;
  productPrice: number;
  shippingFee: number;
  stockNo: number;
  editor: string;
};

function RegistrationForm() {
  const { register, handleSubmit, watch } = useForm<FormData>();

  const [preview, setPreview] = useState<string | null>(null);

  const selectedFile = watch("productImg"); // 이미지 파일을 watch로 관찰

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileBlob = e.target.files[0];
      if (fileBlob) {
        const reader = new FileReader();
        // console.log(reader);

        reader.readAsDataURL(fileBlob); //Base64 인코딩된 url 로 읽는다.

        reader.onloadend = (event) => {
          if (event.target && typeof event.target.result === "string") {
            setPreview(event.target.result);
          }
        };
      } else {
        setPreview(null);
      }
    }
  };
  // console.log(preview);

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form style={{ marginLeft: "5rem" }} onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: "flex" }}>
        <ProductInfoWrapper>
          <LabelWrapper>
            <LabelTxt>상품 이미지</LabelTxt>

            <ProductImgLabel htmlFor="ProductImg">
              {" "}
              <ProductImgInput
                type="file"
                id="ProductImg"
                accept="image/*"
                {...register("productImg", {
                  required: true,
                  onChange: handleImageChange,
                })}
              />
              {preview && <PreviewImg src={preview} alt="preview" />}
              <IconImgLogo src={IconImg} alt="이미지로고" />
            </ProductImgLabel>
          </LabelWrapper>
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
        <Button type="button" size="ms">
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

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const LabelTxt = styled.p`
  font-size: 1.6rem;
  line-height: 2rem;
  margin: 1.5rem 0 1rem 0;
  color: ${({ theme }) => theme.colors.darkGray};
`;
const ProductImgLabel = styled.label`
  position: relative;
  width: 45rem;
  height: 45rem;
  background: ${({ theme }) => theme.colors.lightGray};
`;

const PreviewImg = styled.img`
  position: absolute;
  z-index: 2;
  width: 45rem;
  height: 45rem;
`;

const IconImgLogo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

const ProductImgInput = styled.input`
  display: none;
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
