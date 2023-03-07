import React, { useState, useEffect } from "react";
import "./App.css";
import Wrapper from "./containers/Wrapper/Wrapper";
import TimerDial from "./components/TimerDial/TimerDial";
import ButtonsContainer from "./containers/ButtonsContainer/ButtonsContainer";
import TimerListContainer from "./containers/TimerListContainer/TimerListContainer";



function App() {   

    const [[hours, minutes, seconds], setTimer] = useState([0, 0, 0]);
    const [timerStart, setTimerStart] = useState(false);
    const [pushStopButton, setPushStopButton] = useState(false);
    const [writeTimeInList, setWriteTimeInList] = useState(false);


    // ______________________________

    // timer

    useEffect(() => {        
        let timerIdInterval = null;

        if (timerStart === true) {
            timerIdInterval = setInterval(()=>{setTimer(([hours, minutes, seconds]) => {
                    if (minutes === 59 && seconds === 59) {
                        return[hours+1, 0, 0]
                    } else if (seconds === 59) {
                        return[hours, minutes+1, 0]
                    } else if (seconds < 59) {
                        return[hours, minutes, seconds+1] 
                    }
                    return [hours, minutes, seconds]                    
                }
            )}, 10);  
        }
        
        return () => {clearInterval(timerIdInterval)}     
      
        
    }, [timerStart]);

// ______________________________________________________________________________________________
    // writing a time in the timer list

    useEffect(()=>{
        if (writeTimeInList) {
            console.log([hours, minutes, seconds]) 
        } 
    }, [writeTimeInList])


    // ______handle functions______________   


    const handleWriteTime = (event) => {
        switch (event.target.name) {
            case 'stop':
                setWriteTimeInList(true)
            break

            case 'reset':
                setWriteTimeInList(true)
            break

            default: 
                setWriteTimeInList(false)
            break
        }
    }


    const handleTimerStart = () => {
        setTimerStart(true);
    }

    const handleTimerStop = () => {
        setTimerStart(false);

    }

    const handleTimerReset = (event) => {
        setTimerStart(false);
        // handleWriteTime(event);
        // setTimer([0,0,0])

    }

    const handleSwitchStartButton = (event) => {
        switch (event.target.name) {
            case 'stop':
                setPushStopButton(true)
            break
            default: 
                setPushStopButton(false)
            break
        }
        
    }



    // _______________________
    
    return (
                
        <div className="App">    
            <Wrapper>
                <TimerDial 
                    hours = {hours}
                    minutes = {minutes}
                    seconds = {seconds}/>
                <ButtonsContainer 
                    handleTimerStart={handleTimerStart}
                    handleTimerStop={handleTimerStop}
                    handleTimerReset={handleTimerReset}
                    handleSwitchStartButton={handleSwitchStartButton}
                    pushStopButton={pushStopButton}
                    handleWriteTime={handleWriteTime}
                />
                <TimerListContainer
                    writeTimeInList={writeTimeInList}
                    hours = {hours}
                    minutes = {minutes}
                    seconds = {seconds}
                />
            </Wrapper>
        </div>
    
    );
}

export default App;
