import "./style.css";
import Button from "../../components/Button/Button";

export default function ButtonsContainer({
  handleTimerStart,
  handleTimerStop,
  handleTimerReset,
  handleSwitchStartButton,
  pushStopButton,
  handleWriteTime
}) {   
    return (
        <div className="buttons-container">

            {pushStopButton 
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
                    handleTimerReset(event);          
                }}
            >
            Reset
            </Button>
            
        </div>
    );
}
