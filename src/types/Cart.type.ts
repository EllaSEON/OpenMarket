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
