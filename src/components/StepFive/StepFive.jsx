import { useContext } from 'react';
import { AppContext } from '../../App';
import AvatarImg from '../AvatarImg/AvatarImg';
import './style.css';



export default function StepFive() {
    const {state} = useContext(AppContext);
    console.log(state)
    return (
        <>
            <h1>Thank you for the registration</h1>
            <AvatarImg/>
            <div>
                <h3>User info</h3>
                <ul className='list-info'>
                    <li>Name: {state.userName}</li>
                    <li>Surname: {state.userSurname}</li>
                    <li>Email: {state.email}</li>
                    <li>City: {state.city}</li>
                    <li>Street: {state.streetName}</li>
                    <li>Building: {state.buildingNumber}</li>
                </ul>
            </div>
            
        </>
    );
};