import "./style.css";
import Button from "../../components/Button/Button";
import timerNumberToString from "../../components/helpers/timerNumberToString";

export default function ButtonsContainer({
  handleTimerStart,
  handleTimerStop,
  handleTimerReset,
  handleSwitchStartButton,
  pushStopButton,
  handleWriteTime,
  writeTimeInList,
  ...props
}) {   
    // check timer value
    const timeString = timerNumberToString(props);

    return (
        <div className="buttons-container">

            {pushStopButton && timeString !== '00:00:00.00'
                ?   <Button
                        name="continue"
                        className={"button-continue"}
                        onClick={(event) => {
                            handleTimerStart();
                            handleSwitchStartButton(event);
                            handleWriteTime(event);
                        }}
                    >
                    Continue
                    </Button>
                :  <Button
                        name="start"
                        className={"button-start"}
                        onClick={(event) => {
                            handleTimerStart(); 
                            handleWriteTime(event);                           
                        }}
                    >
                    Start
                    </Button>
            }


            <Button
                name="stop"
                className={"button-stop"}
                onClick={(event) => {
                    handleTimerStop();
                    handleSwitchStartButton(event);
                    handleWriteTime(event);                
                }}
            >
            Stop
            </Button>


            <Button
                name="reset"
                className={"button-reset"}
                onClick={(event) => {
                    handleWriteTime(event);                                      
                    handleSwitchStartButton(event);       
                    setTimeout(()=>{handleTimerReset(event)}, 1)        
                }}
            >
            Reset
            </Button>
            
        </div>
    );
}
