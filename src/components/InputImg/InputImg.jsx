import { useContext } from 'react';
import { AppContext } from '../../App';
import './style.css';

export default function InputImg () {
    const {state, dispatch} = useContext(AppContext); 
    console.log(state)
    return (
        <div className='input-box'>
            <input 
                className='input-img'
                type="file"
                accept="image/png, image/jpeg"                            
                onChange={(e) =>  { 
                    e.preventDefault()                           
                    dispatch({
                        type: 'DATA-INPUT',
                        payload: {imgSrc: URL.createObjectURL(e.target.files[0])}
                    })
                }
                }               
                
            />            
        </div>
    );
};