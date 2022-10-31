import {h} from 'preact';
import style from './style.css';
import Dishwasher from '../../assets/icons/device/dishwasher.png'
import Ecar from '../../assets/icons/device/ecar.png'
import Sauna from '../../assets/icons/device/sauna.png'
import WashingMachine from '../../assets/icons/device/washingmachine.png'
import Waterboiler from '../../assets/icons/device/waterboiler.png'

const icons = {
    dishwasher: Dishwasher,
    ecar: Ecar,
    sauna: Sauna,
    washingmachine: WashingMachine,
    waterboiler: Waterboiler,
}

const DeviceIcon = ({device, selected, selectDevice}) => {
    return (
        <button
            className={`${style.devicebutton} ${device.name === selected.name && style.selected}`}
            onClick={selectDevice.bind(null, device)}>
            <img className={style.deviceicon} src={icons[device.icon]} alt={device.name}/>
        </button>)
}

const Carousel = ({devices, selectedDevice, selectDevice}) => {
    const deviceIcons = devices.map(d => <DeviceIcon device={d} selected={selectedDevice} selectDevice={selectDevice}/>)
    return (
        <div className={`${style.carouselContainer} content-box`}>
            <div className={style.carouselTitle}>Valitse sähkölaite alta</div>
            <div className={style.carousel}>
                {deviceIcons}
            </div>
            <div className={style.devicename}>{selectedDevice.name}</div>

        </div>
    )
};

export default Carousel;
