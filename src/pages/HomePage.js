import {useEffect} from "react";
import {Route} from "react-router-dom";
import {useAxios} from "../hooks/useAxios";

import CurrencyList from "../components/CurrencyList";
import CoinInfoPage from "./CoinInfoPage";

const HomePage = () => {
    const [response, error, loading, fetchData] = useAxios();

    useEffect(() => {
        const updateResponse = (rawData) => {
            return rawData.map((data, index) => {
                data["key"] = index+1
                return data;
            })
        }

        fetchData({
            method: "GET",
            url: "/coins/list",
        }, updateResponse);
    }, [fetchData]);

    return (
        <div>
            <Route path="/home" exact>
                <CurrencyList response={response} loading={loading} error={error}/>
            </Route>
            <Route path="/home/:currencyId">
                <CoinInfoPage/>
            </Route>
        </div>
    );
};

export default HomePage;
