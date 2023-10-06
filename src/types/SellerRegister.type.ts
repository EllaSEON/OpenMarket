export interface SellerProduct extends SellerRegister {
  created_at: string;
  updated_at: string;
  product_id: number;
  store_name: "string";
}

export interface SellerRegisterWithToken extends SellerRegister {
  token: string;
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
