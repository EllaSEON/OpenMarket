import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import sellerRegisterAPI from "../../API/sellerRegisterAPI";

function useCreateRegisterProduct() {
  const navigate = useNavigate();
  return useMutation(sellerRegisterAPI.createRegisterProduct, {
    onSuccess: () => {
      navigate("/admin");
    },
    onError: (error) => {
      console.log(error);
    },
  });
}

export default useCreateRegisterProduct;
