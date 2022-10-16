import React, {useState} from 'react';
import useSuccessMsg from "./useSuccessMsg";
import useErrorMsg from "./useErrorMsg";
import {useMutation, useQueryClient} from "react-query";
import {postApiFormData} from "../helpers/AxiosInstance";

const useFormDataPostHook = ({ queryKey }) => {
  //  Getting cached data from queryClient
  const queryClient = useQueryClient();

  const {
    isLoading: isPostLoading,
    mutate,
    isSuccess: isPostSuccess,
    data: postData,
    isError: isPostError,
  } = useMutation(postApiFormData, {
    onSuccess: (data) => {
      console.log('data', data);
    },
    onError: (error) => {},

    onSettled: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });
  return {
    isPostLoading,
    mutate,
    isPostSuccess,
    postData,
    isPostError,
  };
};

export default useFormDataPostHook;