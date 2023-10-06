import { useMutation, useQueryClient } from "@tanstack/react-query";
import sellerProductAPI from "../../API/sellerProductAPI";

function useDeleteSellerProduct(productId: number) {
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
