import { useMutation, useQueryClient } from "@tanstack/react-query";
import sellerProductAPI from "../../API/sellerProductAPI";
import { useAppSelector } from "../../store/hooks";

function useDeleteSellerProduct(productId: number) {
  const token = useAppSelector((state) => state.login.token);

  const queryClient = useQueryClient();

  const deleteSellerProductMutation = useMutation(
    sellerProductAPI.deleteSellerProduct,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["sellerProduct"]);
      },
    }
  );
  return { deleteSellerProductMutation };
}
export default useDeleteSellerProduct;
