import { useContext } from 'react';
import { AppContext } from '../../App';
import Input from '../InputText/Input';
import Button from '../Button/Button';


export default function StepTwo() {
    const {state, dispatch} = useContext(AppContext);
    console.log(state)    

    return (
        <>
            <h1>Step: 2</h1>

            <div>
                <Input 
                    labelContent ="City" 
                    id="city"
                    type ="text"
                    value={state.city}
                    inputName ="city"              
                >
                </Input>
                <Input 
                    labelContent ="Street" 
                    id="streetName"
                    type ="text"
                    value={state.streetName }
                    inputName ="streetName"              
                >
                </Input>
                <Input 
                    labelContent ="Building" 
                    id="buildingNumber"
                    type ="number"
                    value={state.buildingNumber}
                    inputName ="buildingNumber"              
                >
                </Input>
            </div>
          
            <div>
                <Button

                    onClick={()=>                    
                        dispatch({
                            type: 'STEP-BTN',
                            payload: {formPages:'stepOne'}
                        })
                    }                
                >Previous</Button>    
                <Button

                    onClick={()=>{     
                        if (!state.city || !state.streetName || !state.buildingNumber) {
                            alert("Please fill in all the fields")
                        } else {            
                            dispatch({
                                type: 'STEP-BTN',
                                payload: {formPages:'stepThree'}
                            })
                        }
                    }}                
                >Next</Button>  
            </div>
            
        </>
    );
};