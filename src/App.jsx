import React, { useReducer } from "react";
import "./App.css";
import InputContainer from "./containers/InputContainer/InputContainer";

import StepOne from "./components/StepOne/StepOne";
import StepTwo from "./components/StepTwo/StepTwo";
import StepThree from "./components/StepThree/StepThree";
import StepFour from "./components/StepFour/StepFour";
import StepFive from "./components/StepFive/StepFive";
// default img avatar
import defaultAvatar from "./components/ImgBase64/DefaultAvatar";


// create variables


export const AppContext = React.createContext(null);

const initialState = {
    userName: '',
    userSurname: '',
    email: '',
    city: '',
    streetName: '',
    buildingNumber: '',
    password: '',
    confirmPassword: '',
    imgSrc: defaultAvatar,
    formPages: 'stepOne',
};

// ['stepOne', 'stepTwo', 'stepThree', 'stepFour', 'stepFive']

const reducer = (state, action) => {
    switch (action.type) {
        case 'DATA-INPUT':
            return {
                ...state,
                ...action.payload
            }

        case 'STEP-BTN':
            return {
                ...state,
                ...action.payload
            }
            
    
        default:
            return state;
    }
};



function App() {  
    const [state, dispatch] = useReducer(reducer, initialState);

    // _______________________
    
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <div className="App">    
                <InputContainer>
                    {state.formPages === 'stepOne' && <StepOne/>}
                    {state.formPages === 'stepTwo' && <StepTwo/>}
                    {state.formPages === 'stepThree' && <StepThree/>}
                    {state.formPages === 'stepFour' && <StepFour/>}
                    {state.formPages === 'stepFive' && <StepFive/>}
                </InputContainer>
            </div>
        </AppContext.Provider>    
    
    );
}

export default App;
