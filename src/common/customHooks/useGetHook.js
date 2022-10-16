
import { getApiData } from "../helpers/AxiosInstance";
import {useQuery} from "react-query"

const useGetHook = ({queryKey, url, parma}) => {
  const {isLoading, isError, data, isSuccess} = useQuery(queryKey, async () => {
      const response = await getApiData(url, parma);
      return response.data;
    },
    {
      refetchOnWindowFocus: false,
    });

  return {isLoading, isError, data, isSuccess};
};

export default useGetHook;