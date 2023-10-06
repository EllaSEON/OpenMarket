const ID_REGEX = /^[0-9a-zA-Z]{1,20}$/g;
const PW_REGEX =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g;

export const PHONE_NO_REGEX = /^[0-9]+$/;

export const START_EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+/g;

export const END_EMAIL_REGEX = /[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

export const BUSINESS_REGEX = /\d{10}/;

const PRICE_REGEX = /^(?:\d{1,3}(?:,\d{3})*|\d+)(?:\.\d{2})?$/;

const STOCK_REGEX = /^\d+$/;

export const regExp = {
  ID_REGEX,
  PW_REGEX,
  PHONE_NO_REGEX,
  START_EMAIL_REGEX,
  END_EMAIL_REGEX,
  BUSINESS_REGEX,
  PRICE_REGEX,
  STOCK_REGEX,
};

export default regExp;
