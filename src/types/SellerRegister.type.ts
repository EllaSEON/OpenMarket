export interface SellerRegisterWithToken extends SellerRegister {
  token: string;
  [key: string]: any; // 인덱스 시그니처 추가
}

export interface SellerRegister {
  product_name: string;
  image: string;
  price: number;
  shipping_method: "PARCEL" | "DELIVERY";
  shipping_fee: number;
  stock: number;
  product_info: string;
}
