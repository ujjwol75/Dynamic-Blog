import {useMutation, useQueryClient} from 'react-query';
import {postApiData} from "../helpers/AxiosInstance";
import useErrorMsg from "./useErrorMsg";
import useSuccessMsg from "./useSuccessMsg";
import {useState} from "react";
import {useHistory} from "react-router-dom";

const useRouterPostHook = ({queryKey, setOpenAddPopup}) => {
   const history = useHistory();
   const [successMsg, setSuccessMsg] = useSuccessMsg();
   const [errorMsg, setErrorMsg] = useErrorMsg();
   const [addSuccessSnackBar, setAddSuccessSnackBar] = useState(false);
   const [errorSnackBar, setErrorSnackBar,] = useState(false);
   
   //  Getting cached data from queryClient
   const queryClient = useQueryClient();
   
   const {
      isLoading: isPostLoading,
      mutate,
      isSuccess: isPostSuccess,
      data: postData,
      isError: isPostError
   } = useMutation(postApiData, {
      onSuccess: data => {
         if (data.status === 201) {
            setAddSuccessSnackBar(true);
            setOpenAddPopup(false);
            history.push(`/users/profile/${data.data.id}`)
         }
      },
      onError: error => {
         setErrorSnackBar(true)
      },
      
      onSettled: () => {
         queryClient.invalidateQueries(queryKey)
      }
      
   });
   return {
      isPostLoading,
      mutate,
      isPostSuccess,
      postData,
      isPostError,
      successMsg,
      errorMsg,
      addSuccessSnackBar,
      setAddSuccessSnackBar,
      errorSnackBar,
      setErrorSnackBar
   }
};

export default useRouterPostHook;