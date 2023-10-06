import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import cartAPI from "../../API/cartAPI";

function useCreateCartProduct() {
  const navigate = useNavigate();

  const cartMutation = useMutation(cartAPI.createCartProduct, {
    onSuccess: () => {
      const cartAlert = window.confirm(
        "장바구니에 담았습니다. 장바구니로 이동하시겠습니까?"
      );
      if (cartAlert === true) {
        navigate("/cart");
      }
    },
    onError: () => {
      alert("재고보다 더 많은 상품을 담을 수 없습니다.");
    },
  });

  return cartMutation;
}

export default useCreateCartProduct;
