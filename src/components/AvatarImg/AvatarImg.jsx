import { useContext } from 'react';
import { AppContext } from '../../App';
import './style.css';


export default function AvatarImg() {
    const {state} = useContext(AppContext);

    return (
        <img src={state.imgSrc} alt="avatar" className='img-avatar'/>
    )
}