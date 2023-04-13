import { Cookies } from "react-cookie";

const cookies = new Cookies();

// 쿠키에 값을 저장할 때
export const setCookie = (name: string, value: string) => {
  return cookies.set(name, value, { maxAge: 60 * 60 * 3, path: "/" });
};

// 쿠키에 있는 값을 꺼낼때
export const getCookie = (name: string) => {
  return cookies.get(name);
};

//쿠키를 지울때
export const removeCookie = (name: string) => {
  return cookies.remove(name);
};
