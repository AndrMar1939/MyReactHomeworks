import './style.css';

export default function TimerList ({children}) {
    return (
        <li className='timer-list-item'>{children}</li>
    )
}