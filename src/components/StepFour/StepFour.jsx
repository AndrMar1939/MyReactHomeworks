import { useContext } from 'react';
import { AppContext } from '../../App';
import Input from '../InputText/Input';
import Button from '../Button/Button';
import passwordValidator from '../../helpers/passwordValidator';


export default function StepFour() {
    const {state, dispatch} = useContext(AppContext);

    const confirmBtnDisabled = state.password.length>0 || state.confirmPassword.length>0  ? false : true;

    const handleConfirmBtn = () => {
        if (state.password !== state.confirmPassword){
            return alert("passwords should be the same")
        } 

        if (state.password.length < 6 || state.password.length > 16 ){
            return alert("the password must be longer than 6 characters and no more than 16 characters")
        }        
        
        if (!passwordValidator(state.password)) {
             return alert("the password must contain at least one digit and one special character")
        } 

        dispatch({
            type: 'STEP-BTN',
            payload: {formPages:'stepFive'}
        })   
        
    };

    return (
        <>
            <h1>Step: 4</h1>

            <div>
                <Input 
                    labelContent ="Password" 
                    id ="userPassword"
                    type ="password"
                    value={state.password}
                    inputName ="password"              
                >
                </Input>

                <Input 
                    labelContent ="Confirm Password" 
                    id="userConfirmPassword"
                    type ="password"
                    value={state.confirmPassword}
                    inputName ="confirmPassword"              
                >
                </Input>   
            </div>
       
            <div>
                <Button                    
                    onClick={()=>                    
                        dispatch({
                            type: 'STEP-BTN',
                            payload: {formPages:'stepThree'}
                        })
                    }                
                >Previous</Button> 

                <Button
                    disabled ={confirmBtnDisabled}
                    onClick={()=> handleConfirmBtn() }                
                >Submit</Button>  
            </div>
            
        </>
    );
};