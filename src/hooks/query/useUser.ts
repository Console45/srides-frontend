import { useQuery } from "react-query";
import axios from "../../config/axios-config";

export const useUser = () => {
  const getUser = async () => {
    const apiRoute = "/user/me";
    const { data } = await axios.get(apiRoute);
    return data.data;
  };
  const { data: user, isLoading } = useQuery("user", getUser);
  return { user, loading: isLoading };
};
