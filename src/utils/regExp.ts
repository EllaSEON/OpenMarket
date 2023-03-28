const ID_REGEX = /^[0-9a-zA-Z]{1,20}$/g;
const PW_REGEX =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g;

export const regExp = {
  ID_REGEX,
  PW_REGEX,
};

export default regExp;
