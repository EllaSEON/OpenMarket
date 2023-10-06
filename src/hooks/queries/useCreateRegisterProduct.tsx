import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import sellerProductAPI from "../../API/sellerProductAPI";

function useCreateRegisterProduct() {
  const navigate = useNavigate();
  return useMutation(sellerProductAPI.createRegisterProduct, {
    onSuccess: () => {
      navigate("/admin");
    },
    onError: (error) => {
      console.log(error);
    },
  });
}

export default useCreateRegisterProduct;
