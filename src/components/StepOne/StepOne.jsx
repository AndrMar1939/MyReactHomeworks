import { useContext } from 'react';
import { AppContext } from '../../App';
import Input from '../InputText/Input';
import Button from '../Button/Button';
import emailValidator from '../../helpers/emailValidator';


export default function StepOne() {
    const {state, dispatch} = useContext(AppContext);
    console.log(state)

    return (
        <>
            <h1>Step: 1</h1>

            <div>
                <Input 
                    labelContent ="Name" 
                    id = "userName"
                    type ="text"
                    value={state.userName}
                    inputName ="userName"              
                >
                </Input>
                <Input 
                    labelContent ="Surname" 
                    id ="userSurname"
                    type ="text"
                    value={state.userSurname}
                    inputName ="userSurname"              
                >
                </Input>
                <Input 
                    labelContent ="Email" 
                    id="email"
                    type ="email"
                    value={state.email}
                    inputName ="email"              
                >
                </Input>
            </div>

            <Button
                
                onClick={()=>{
                    if (!state.userName || !state.userSurname || !state.email) {
                        alert("Please fill in all the fields")
                    } else if (!emailValidator(state.email)) {
                        alert("Incorrect email")
                    } else {              
                        dispatch({
                            type: 'STEP-BTN',
                            payload: {formPages:'stepTwo'}
                        })
                    }
                }}
            >Next</Button>               
            
        </>
    );
};