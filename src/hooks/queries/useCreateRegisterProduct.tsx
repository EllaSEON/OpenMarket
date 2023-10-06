import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import sellerRegisterAPI from "../../API/sellerRegisterAPI";

function useCreateRegisterProduct() {
  const navigate = useNavigate();
  return useMutation(sellerRegisterAPI.createRegisterProduct, {
    onSuccess: () => {
      navigate("/admin");
    },
    onError: (error: any) => {},
  });
}

export default useCreateRegisterProduct;
