export interface SellerRegister {
  token: string;
  product_name: string;
  image: string;
  price: number;
  shipping_method: "PARCEL" | "DELIVERY";
  shipping_fee: number;
  stock: number;
  product_info: string;
}
