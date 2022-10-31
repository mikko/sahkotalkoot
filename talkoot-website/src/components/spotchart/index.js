import {h} from 'preact';
import style from './style.css';


const SVGPriceBar = ({date, price, index, bestHours}) => {
    const ts = new Date(date);
    const hour = ts.getHours();
    const hourStr = hour.toString().padStart(2, '0');

    const x = index * 4.15 + "%";
    const height = (price / 2) * 100;
    const barY = 100 - height + "px";
    const isBestHour = bestHours.indexOf(hour) !== -1;
    return (<>
            <rect className={`${style.bar} ${price < 1.3 && style.cheapBar} ${isBestHour && style.selectedBar}`}
                  x={x} y={barY} width="3%" height={height + "px"}/>
            <text className={style.time} x={x} y={120}>{hourStr}</text>
        </>
    )
}

const SpotChart = ({prices, bestHours}) => {
    // const bars = Object.keys(prices).map(priceDate => <PriceBar date={priceDate} price={prices[priceDate]}/>);
    const svgBars = Object.keys(prices).map((priceDate, index) => <SVGPriceBar date={priceDate}
                                                                               price={prices[priceDate]}
                                                                               index={index} bestHours={bestHours}/>);
    // Calculate max and min
    // Create the bars with relative price
    // Remember negative prices
    return (
        <div className={`${style.chart} content-box`}>
            <svg version="1.1" viewBox="0 0 500 150">
                {svgBars}
            </svg>
        </div>
    )
    /*
    <div className={style.barContainer}>
                {bars}
            </div>
     */
};

export default SpotChart;
