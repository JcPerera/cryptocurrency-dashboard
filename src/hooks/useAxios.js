import { useState, useCallback } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://api.coingecko.com/api/v3";

export const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async (params, updateResponse) => {
    try {
      setLoading(true);
      const result = await axios.request(params);
      if(updateResponse){
        let updatedResponse = updateResponse(result.data)
        setResponse(updatedResponse);
      }else{
        setResponse(result.data);
      }
    } catch (error) {
      setError(error.response);
    } finally {
      setLoading(false);
    }
  }, []);

  return [response, error, loading, fetchData];
};
