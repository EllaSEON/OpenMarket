export interface LoginData {
  username: string;
  password: string;
  login_type: string;
}

interface BasePostData {
  username: string;
  password: string;
  password2: string;
  phone_number: string;
  name: string;
}

export interface BuyerPostData extends BasePostData {}

export interface SellerPostData extends BasePostData {
  company_registration_number: string;
  store_name: string;
}
