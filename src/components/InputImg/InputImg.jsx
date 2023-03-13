import { useContext } from 'react';
import { AppContext } from '../../App';
import './style.css';

export default function InputImg () {
    const {dispatch} = useContext(AppContext); 

    return (
        <div className='input-box'>
            <input 
                className='input-img'
                type="file"
                accept="image/png, image/jpeg"                              
                onChange={(e) =>  
                            
                    dispatch({
                        type: 'DATA-INPUT',
                        payload: {imgSrc: URL.createObjectURL(e.target.files[0])}
                    })
                }               
                
            />            
        </div>
    );
};