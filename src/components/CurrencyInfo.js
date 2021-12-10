import React, {useEffect} from "react";
import {useParams} from "react-router-dom";

import {useAxios} from "../hooks/useAxios";
import Container from "./Container";
import classes from "./CurrencyInfo.module.css";

const CurrencyInfo = (props) => {
    const params = useParams();
    const [response, , , fetchData] = useAxios();

    useEffect(() => {
        fetchData({
            method: "GET",
            url: `/coins/${params.currencyId}`,
        });
    }, [fetchData, params]);

    return (
        response && (
            <Container>
                <div className={classes['coin-info-wrapper']}>
                    <div className={classes['coin-info-header']}>
                        <img className={classes.img} src={response.image.small || response.image.thumb || ""}
                             alt={response.symbol}/>
                        <div className={classes['coin-name']}>{response.id}</div>
                        <div className={classes.tags}>{response.symbol.toUpperCase()}</div>
                        <div className={classes.tags}>Rank #{response.coingecko_rank}</div>
                    </div>
                    <div className={classes['price-header']}>
                        {response.id} Price ({response.symbol.toUpperCase()})
                    </div>
                    <div className={classes['price-info']}>
                        <div className={classes.price}>
                            A$34234.00
                        </div>
                        <div className={classes.change}>
                            5.56%
                        </div>
                    </div>
                </div>
            </Container>
        )
    );
};

export default CurrencyInfo;
