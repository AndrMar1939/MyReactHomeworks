import React, { useState, useEffect } from "react";
import "./App.css";
import Wrapper from "./containers/Wrapper/Wrapper";
import TimerDial from "./components/TimerDial/TimerDial";
import ButtonsContainer from "./containers/ButtonsContainer/ButtonsContainer";
import TimerListContainer from "./containers/TimerListContainer/TimerListContainer";



function App() {   

    const [[hours, minutes, seconds, centiseconds], setTimer] = useState([0, 0, 0, 0]);
    const [timerStart, setTimerStart] = useState(false);
    const [pushStopButton, setPushStopButton] = useState(false);
    const [writeTimeInList, setWriteTimeInList] = useState(false);


    // ______________________________

    // timer

    useEffect(() => {        
        let timerIdInterval = null;

        if (timerStart === true) {
            timerIdInterval = setInterval(()=>{setTimer(([hours, minutes, seconds, centiseconds]) => {
                    if (minutes === 59 && seconds === 59 && centiseconds === 99) {
                        return[hours+1, 0, 0, 0]
                    } else if (seconds === 59 && centiseconds === 99) {
                        return[hours, minutes+1, 0, 0]
                    } else if (centiseconds === 99) {
                        return[hours, minutes, seconds+1, 0] 
                    } else if (centiseconds < 99) {
                        return[hours, minutes, seconds, centiseconds+1] 
                    }
                    return [hours, minutes, seconds, centiseconds]                    
                }
            )}, 10);  
        }
        
        return () => {clearInterval(timerIdInterval)}     
      
        
    }, [timerStart]);

    // ______handle functions______________   


    const handleWriteTime = (event) => {
        if (writeTimeInList === false && event.target.name === 'stop' || 
            writeTimeInList === false && event.target.name === 'reset') {           
            setWriteTimeInList(true);
        } else { setWriteTimeInList(false)}
    }


    const handleTimerStart = () => {
        setTimerStart(true);
    }

    const handleTimerStop = () => {
        setTimerStart(false);

    }

    const handleTimerReset = () => {
        setTimer([0,0,0,0])
        setTimerStart(false);
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
                    seconds = {seconds}
                    centiseconds ={centiseconds}/>
                <ButtonsContainer 
                    hours = {hours}
                    minutes = {minutes}
                    seconds = {seconds}
                    centiseconds ={centiseconds}
                    handleTimerStart={handleTimerStart}
                    handleTimerStop={handleTimerStop}
                    handleTimerReset={handleTimerReset}
                    handleSwitchStartButton={handleSwitchStartButton}
                    pushStopButton={pushStopButton}
                    handleWriteTime={handleWriteTime}
                    writeTimeInList={writeTimeInList}
                />
                <TimerListContainer
                    hours = {hours}
                    minutes = {minutes}
                    seconds = {seconds}
                    centiseconds ={centiseconds}                
                    writeTimeInList={writeTimeInList}

                />
            </Wrapper>
        </div>
    
    );
}

export default App;
