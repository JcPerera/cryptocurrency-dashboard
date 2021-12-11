import {CaretDownOutlined, CaretUpOutlined, LinkOutlined, GithubOutlined} from '@ant-design/icons';
import classes from "./CurrencyInfo.module.css";

const CurrencyInfo = (props) => {
    const {img, symbol, id, rank, price, priceChange, webUrl, gitUrl} = props

    let isNegative = false;
    if (price) {
        if (price < 0) {
            isNegative = true;
        }
    }

    return (
        <div className={classes['coin-info-wrapper']}>
            <div className={classes['coin-info-header']}>
                <img className={classes.img} src={img || ""}
                     alt={symbol}/>
                <div className={classes['coin-name']}>{id}</div>
                <div className={classes.tags}>{symbol.toUpperCase()}</div>
                <div className={classes.tags}>Rank #{rank}</div>
            </div>
            <div className={classes['price-header']}>
                {id} Price ({symbol.toUpperCase()})
            </div>
            <div className={classes['price-info']}>
                <div className={classes.price}>
                    A${price}
                </div>
                {priceChange &&
                    <div className={!isNegative ? classes.green : classes.change}>

                        {isNegative ? <CaretDownOutlined/> :
                            <CaretUpOutlined/>} {priceChange.toFixed(2)}%

                    </div>}
            </div>
            <div className={classes.tags}>
                <LinkOutlined/> <a href={webUrl}>Official Website</a>
            </div>
            <div className={classes.tags}>
                <GithubOutlined/> <a href={gitUrl}>Source code</a>
            </div>
        </div>
    );
};

export default CurrencyInfo;
