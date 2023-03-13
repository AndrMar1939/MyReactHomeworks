import { useContext } from 'react';
import { AppContext } from '../../App';
import InputImg from '../InputImg/InputImg';
import Button from '../Button/Button';
import AvatarImg from '../AvatarImg/AvatarImg';
import './style.css';


export default function StepThree() {
    const {dispatch} = useContext(AppContext);

    return (
        <>
            <h1>Step: 3</h1>
            
            <InputImg/>

            <AvatarImg/>            
          
            <div>
                <Button
                    onClick={()=>                    
                        dispatch({
                            type: 'STEP-BTN',
                            payload: {formPages:'stepTwo'}
                        })
                    }                
                >Previous</Button>    
                <Button
                    onClick={()=>                    
                        dispatch({
                            type: 'STEP-BTN',
                            payload: {formPages:'stepFour'}
                        })
                    }                
                >Next</Button>  
            </div>
            
        </>
    );
};