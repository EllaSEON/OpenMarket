import { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import imageCompression from "browser-image-compression";
import IconImg from "../../assets/images/icon-img.svg";
import { LabelTxt } from "./RegistrationForm";
import { SellerRegister } from "../../types/SellerRegister.type";

interface ImageUploadProps {
  register: UseFormRegister<SellerRegister>;
}

function ImageUpload({ register }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const fileBlob = e.target.files[0];

    // 이미지 압축 옵션 설정
    const compressionOptions = {
      maxSizeMB: 0.6,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    try {
      // 이미지 압축
      const compressedFile = await compressImage(fileBlob, compressionOptions);
      // console.log(compressedFile);

      // 이미지 미리보기
      displayImagePreview(compressedFile);
    } catch (error) {
      console.log(error);
    }
  };

  const compressImage = async (file: File, options: any) => {
    try {
      const compressedFile = await imageCompression(file, options);
      return compressedFile;
    } catch (error) {
      throw error;
    }
  };

  const displayImagePreview = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (event) => {
      if (event.target && typeof event.target.result === "string") {
        setPreview(event.target.result);
      }
    };
  };

  return (
    <LabelWrapper>
      <LabelTxt>상품 이미지</LabelTxt>

      <ProductImgLabel htmlFor="ProductImg">
        {" "}
        <ProductImgInput
          type="file"
          id="ProductImg"
          accept="image/*"
          {...register("image", {
            required: true,
            onChange: handleImageChange,
          })}
        />
        {preview && <PreviewImg src={preview} alt="preview" />}
        <IconImgLogo src={IconImg} alt="이미지로고" />
      </ProductImgLabel>
    </LabelWrapper>
  );
}

export default ImageUpload;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
