import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import authAPI from "../../API/authAPI";

function useCreateSignup() {
  const navigate = useNavigate();

  const signupBuyerMutation = useMutation(authAPI.createSignupBuyer, {
    onSuccess: () => {
      navigate("/login");
    },
    onError: (error: any) => {
      if (error.message === "Request failed with status code 400") {
        alert("해당 사용자 전화번호는 이미 존재합니다.");
      } else {
        alert("에러가 발생했습니다.");
      }
    },
  });

  const signupSellerMutation = useMutation(authAPI.createSignupSeller, {
    onSuccess: () => {
      navigate("/login");
    },
    onError: (error: any) => {
      if (error.response && error.response.data) {
        const errorData = error.response.data;
        if (errorData.store_name) {
          alert(errorData.store_name[0]);
        }
        if (errorData.phone_number) {
          alert(errorData.phone_number[0]);
        }
      } else {
        alert("에러가 발생했습니다.");
      }
    },
  });

  return {
    signupBuyerMutation,
    signupSellerMutation,
  };
}

export default useCreateSignup;
