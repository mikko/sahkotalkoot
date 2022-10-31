import {h} from 'preact';
import {useState} from 'preact/hooks';
import style from './style.css';
import SpotChart from '../../components/spotchart'
import Carousel from "../../components/carousel";
import Summary from "../../components/summary";

const calculateBestHours = (device, prices) => {
    let priceArr = Object.keys(prices)
        .map(ts => ({hour: new Date(ts).getHours(), price: parseFloat(prices[ts])}))
        .sort((a, b) => a.hour - b.hour);

    if (Array.isArray(device.allowedHours)) {
        priceArr = priceArr.filter(d => d.hour > device.allowedHours[0] && d.hour < device.allowedHours[1])
    }
    const sortedPrices = priceArr.slice().sort((a, b) => a.price - b.price);

    // Allow multiple hours here and there
    if (device.hoursPerUse === 1 || device.splitHours) {
        const hoursRequired = device.hoursPerUse;
        const bestHours = sortedPrices.slice(0, hoursRequired)
        return bestHours.map(d => d.hour);
    }
    // Only allow consecutive hours
    else {
        const hourCount = device.hoursPerUse;
        const hourChunks = Array(priceArr.length)
            .fill()
            .map((_, i) => {
                return (i + hourCount) < priceArr.length ?
                    ({ hours: [priceArr[i].hour, priceArr[i+1].hour, priceArr[i+2].hour], totalPrice: priceArr[i].price + priceArr[i+1].price + priceArr[i+2].price})
                    : null
            })
            .filter(n => n);
        const sortedChunks = hourChunks.sort((a, b) => a.totalPrice - b.totalPrice);
        return sortedChunks[0].hours;
    }
}

const Home = ({prices, devices}) => {
    // TODO: monthly price stats (average, min, max, average weekday)

    const [selectedDevice, setSelectedDevice] = useState(devices[0])

    const onDeviceSelected = (device) => {
        setSelectedDevice(device)
        // useEffect something
    }

    const bestHours = calculateBestHours(selectedDevice, prices)

    return (
        <div className={style.home}>
            <div className={style.content}>
                <div className={style.info}>
                    Minulla ei ole pörssisähkösopimusta. Miksi minua pitäisi kiinnostaa?<br/>
                    Tähän joku perkeleen hyvä peruste!
                </div>

                <SpotChart device={selectedDevice} prices={prices} bestHours={bestHours}></SpotChart>
                <Carousel devices={devices} selectDevice={onDeviceSelected} selectedDevice={selectedDevice}></Carousel>
                <Summary device={selectedDevice} prices={prices} bestHours={bestHours}></Summary>
            </div>
        </div>
    );
}

export default Home;
