import React, {useState} from 'react';
import {useMutation, useQueryClient} from 'react-query';
import useErrorMsg from "./useErrorMsg";
import useSuccessMsg from "./useSuccessMsg";
import {putApiData} from "../helpers/AxiosInstance";

const usePutHook = ({queryKey, setOpenEditPopup}) => {
   
   //getting cached data from queryClient
   const queryClient = useQueryClient();
   const [successMsg, setSuccessMsg] = useSuccessMsg();
   const [errorMsg, setErrorMsg] = useErrorMsg();
   const [updateSuccessSnackBar, setUpdateSuccessSnackBar] = useState(false)
   const [errorSnackBar, setErrorSnackBar,] = useState(false);
   const {
      isLoading: isUpdateLoading,
      mutate,
      isSuccess: isUpdateSuccess,
      data: updateData,
      isError: isUpdateError
   } = useMutation(putApiData, {
      onSuccess: data => {
         if(data.status === 200) {
            setUpdateSuccessSnackBar(true);
            setOpenEditPopup(false);
         }
      },
      onError: error => {
         setErrorSnackBar(true)
      },
      onSettled: () => {
         //  When the mutation succeeds, invalidate or re-render queries with provided queryKey
         //  (or re-render particular component)
         queryClient.invalidateQueries(queryKey);
      },
   });
   
   return {
      isUpdateLoading,
      mutate,
      isUpdateSuccess,
      updateData,
      successMsg,
      isUpdateError,
      errorMsg,
      updateSuccessSnackBar,
      setUpdateSuccessSnackBar,
      setErrorSnackBar,
      errorSnackBar
   };
};

export default usePutHook;