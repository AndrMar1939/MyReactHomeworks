import './style.css';
import TimerListItem from '../../components/TimerListItem/TimerListItem';
import timerNumberToString from '../../components/helpers/timerNumberToString';
import { timeStorage } from '../../components/timeStorage/timeStorage';

export default function TimerListContainer ({
    writeTimeInList,
    ...props
}) {   

    if (writeTimeInList) {
        // transform array in time string
        const time = timerNumberToString(props);
        timeStorage.push(time);
    }
    return (      
        <ol className="timer-list-container">
            {timeStorage.map(item => <TimerListItem>{item}</TimerListItem>)}
        </ol>      
    )
}