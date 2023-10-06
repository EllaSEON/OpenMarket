import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import cartAPI from "../../API/cartAPI";

function useCreateCartProduct() {
  const navigate = useNavigate();

  const cartMutation = useMutation(cartAPI.createCartProduct, {
    onSuccess: () => {
      navigate("/cart");
    },
    onError: () => {
      alert("재고보다 더 많은 상품을 담을 수 없습니다.");
    },
  });

  return cartMutation;
}

export default useCreateCartProduct;
