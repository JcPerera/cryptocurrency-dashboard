import { useEffect } from "react";
import { Route } from "react-router-dom";
import { useAxios } from "../hooks/useAxios";

import CurrencyList from "../components/CurrencyList";
import CurrencyInfo from "../components/CurrencyInfo";

const Home = () => {
  const [response, error, loading, fetchData] = useAxios();
  
  useEffect(() => {
    fetchData({
      method: "GET",
      url: "/coins/list",
    });
  }, [fetchData]);

  return (
    <div>
      <Route path="/home" exact>
        <CurrencyList response={response} loading={loading} />
      </Route>
      <Route path="/home/currency/:currencyId">
        <CurrencyInfo/>
      </Route>
    </div>
  );
};

export default Home;
