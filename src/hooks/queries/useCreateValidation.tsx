import { useMutation } from "@tanstack/react-query";
import authAPI from "../../API/authAPI";

const useCreateValidation = (
  setIsIdChecked: any,
  setIsBusinessChecked: any,
  setError: any
) => {
  const validateUserNameMutation = useMutation(authAPI.createValidateUserName, {
    onSuccess: (data) => {
      setIsIdChecked(true);
      setError("id", {
        type: "success",
        message: data.Success,
      });
    },
    onError: (error: any) => {
      setIsIdChecked(false);
      setError("id", {
        type: "fail",
        message: error.response.data.FAIL_Message,
      });
    },
  });

  const validateCompanyNoMutation = useMutation(
    authAPI.createValidateCompanyNo,
    {
      onSuccess: (data) => {
        setIsBusinessChecked(true);
        setError("businessNo", {
          type: "success",
          message: data.Success,
        });
      },
      onError: (error: any) => {
        setError("businessNo", {
          type: "fail",
          message: error.response.data.FAIL_Message,
        });
      },
    }
  );

  return {
    validateUserNameMutation,
    validateCompanyNoMutation,
  };
};

export default useCreateValidation;
