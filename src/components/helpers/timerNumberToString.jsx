export default function timerNumberToString (props) {
    const stringHours = props.hours + '';
    const stringMinutes = props.minutes + '';
    const stringSeconds = props.seconds + '';

    return `${stringHours.padStart(2, "0")}:${stringMinutes.padStart(2, "0")}:${stringSeconds.padStart(2, "0")}`;
}