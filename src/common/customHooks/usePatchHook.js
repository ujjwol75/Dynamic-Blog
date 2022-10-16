import {useMutation, useQueryClient} from 'react-query';
import useErrorMsg from "./useErrorMsg";
import useSuccessMsg from "./useSuccessMsg";
import {patchApiData} from "../helpers/AxiosInstance";
import {useState} from "react";

const usePatchHook = ({queryKey, setOpenEditPopup}) => {
  const [successMsg, setSuccessMsg] = useSuccessMsg();
  const [errorMsg, setErrorMsg] = useErrorMsg();
  const [addSuccessSnackBar, setAddSuccessSnackBar] = useState(false);
  const [errorSnackBar, setErrorSnackBar,] = useState(false);
  
  //  Getting cached data from queryClient
  const queryClient = useQueryClient();
  
  const {
    isLoading: isPatchLoading,
    mutate,
    isSuccess: isPatchSuccess,
    data: patchData,
    isError: isPatchError
  } = useMutation(patchApiData, {
    onSuccess: data => {
      if (data.status === 200) {
        setAddSuccessSnackBar(true);
        setOpenEditPopup(false);
        setSuccessMsg(data);
      }
    },
    onError: error => {
      const err = JSON.parse(error.request.response)
      setErrorMsg(err.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries(queryKey)
    }
  });
  return {isPatchLoading, mutate, isPatchSuccess, patchData, isPatchError, successMsg, errorMsg}
};

export default usePatchHook;