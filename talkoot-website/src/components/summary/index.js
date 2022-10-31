import { h } from 'preact';
import style from './style.css';

const Summary = ({device, prices, bestHours}) => {
    return (
        <div className={`${style.summary} content-box`}>
            Saunan 5kW lämmitys klo 15 0.08€

        </div>
    )
};

export default Summary;
