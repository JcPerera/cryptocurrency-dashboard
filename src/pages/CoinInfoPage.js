import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useAxios} from "../hooks/useAxios";
import CurrencyInfo from "../components/CurrencyInfo";
import Container from "../components/Container";
import {Alert} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';

const CoinInfoPage = () => {
    const params = useParams();
    const [response, error, loading, fetchData] = useAxios();
    const url = "/coins/".concat(params.currencyId.toLowerCase())

    useEffect(() => {
        fetchData({
            method: "GET",
            url,
        });
    }, [fetchData, url]);

    const loadingSpinner = <Container><LoadingOutlined style={{fontSize: 40}} spin/></Container>;
    const errorBanner = error && <Container><Alert message="Error"
                                                    description={error.data.error}
                                                    type="error"
                                                    showIcon/> </Container>

    return (error ? errorBanner : loading ? loadingSpinner : response && <Container>
            <CurrencyInfo img={response.image.small}
                          symbol={response.symbol}
                          id={response.id}
                          rank={response.coingecko_rank}
                          price={response.market_data.current_price.aud}
                          priceChange={response.market_data.price_change_percentage_24h}
                          webUrl={response.links.homepage[0]}
                          gitUrl={response.links.repos_url.github[0]}/>
        </Container>
    )

}
export default CoinInfoPage;