
// transform an array of numbers to a time string
export default function timerNumberToString (props) {
    const stringHours = props.hours + '';
    const stringMinutes = props.minutes + '';
    const stringSeconds = props.seconds + '';
    const stringCentiseconds = props.centiseconds + '';

    return `${stringHours.padStart(2, "0")}:${stringMinutes.padStart(2, "0")}:${stringSeconds.padStart(2, "0")}.${stringCentiseconds.padStart(2, "0")}`;
}