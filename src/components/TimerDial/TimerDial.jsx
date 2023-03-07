import './style.css';
import timerNumberToString from '../helpers/timerNumberToString';

export default function TimerDial(props){
    return (
        <div className='timer-dial'>{timerNumberToString(props)}</div>
    )
}