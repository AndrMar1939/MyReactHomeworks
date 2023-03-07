import './style.css';
import TimerListItem from '../../components/TimerListItem/TimerListItem';
import timerNumberToString from '../../components/helpers/timerNumberToString';
import { timeStorage } from '../../components/timeStorage/timeStorage';

export default function TimerListContainer ({
    writeTimeInList,
    ...props
}) {   
    // transform array in time string
    const time = timerNumberToString(props);
    
    if (writeTimeInList && time !== '00:00:00.00') {   
        
        timeStorage.push(time);
        
        localStorage.setItem('timesArray', JSON.stringify(timeStorage));
    }
    return (      
        <ol className="timer-list-container">
            {timeStorage.map(item => <TimerListItem>{item}</TimerListItem>)}
        </ol>      
    )
}