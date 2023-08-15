export interface CreateCartType {
  token: string;
  product_id: string;
  quantity: number;
  check: boolean;
}
export interface UpdateCartQuantityType {
  token: string;
  product_id: string;
  cart_item_id: number;
  quantity: number;
  is_active: boolean;
}

export interface CartType {
  my_cart: number;
  cart_item_id: number;
  product_id: string;
  quantity: number;
  is_active: boolean;
}

export interface CartItemType extends CartType {
  productDetail: ProductDetailType;
}

export interface ProductDetailType {
  product_id: string;
  created_at: string;
  updated_at: string;
  product_name: string;
  image: string;
  price: number;
  shipping_method: "PARCEL" | "DELIVERY"; //string, 선택
  shipping_fee: number;
  stock: number;
  products_info: string;
  seller: string;
  store_name: string;
}
