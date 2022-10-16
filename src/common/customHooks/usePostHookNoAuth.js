import {useMutation} from 'react-query';
import {postApiDataNoAuth} from "../helpers/AxiosInstance";
import useErrorMsg from "./useErrorMsg";
import useSuccessMsg from "./useSuccessMsg";

const usePostHookNoAuth = () => {
  const [successMsg, setSuccessMsg] = useSuccessMsg();
  const [errorMsg, setErrorMsg] = useErrorMsg();
  const {
    isLoading: isPostLoading,
    mutate,
    isSuccess: isPostSuccess,
    data: postData,
    isError: isPostError
  } = useMutation(postApiDataNoAuth, {
    onSuccess: data => {
      if (data.status === 401) {
        setErrorMsg(data.data.detail)
      }
    },
    onError: error => {
      const err = JSON.parse(error.request.response)
      setErrorMsg(err.message);
    }
  });
  return [isPostLoading, mutate, isPostSuccess, postData, isPostError, successMsg, errorMsg]
};

export default usePostHookNoAuth;