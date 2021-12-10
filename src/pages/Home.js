import {useEffect} from "react";
import {Route} from "react-router-dom";
import {useAxios} from "../hooks/useAxios";

import CurrencyList from "../components/CurrencyList";
import CurrencyInfo from "../components/CurrencyInfo";

const Home = () => {
    const [response, , loading, fetchData] = useAxios();

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
                <CurrencyList response={response} loading={loading}/>
            </Route>
            <Route path="/home/currency/:currencyId">
                <CurrencyInfo/>
            </Route>
        </div>
    );
};

export default Home;
