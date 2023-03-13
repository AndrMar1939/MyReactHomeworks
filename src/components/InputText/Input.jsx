import { useContext } from 'react';
import { AppContext } from '../../App';
import './style.css';

export default function Input ({
    labelContent,
    id,
    type,
    value,
    inputName,
}) {
    const {dispatch} = useContext(AppContext);

    return (
        <div className='input-box'>
            <label htmlFor={id} className='input-label'>{labelContent}</label>
            <input 
                className='input-area'
                type={type} 
                defaultValue={value}
                name={inputName}
                id={id}
                onChange={

                    (e)=>{
                     dispatch({
                         type: 'DATA-INPUT',
                         payload: {[e.currentTarget.name]: e.currentTarget.value,}
                       })
                    } 
                 } 
            />
        </div>
    );
};