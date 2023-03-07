import './style.css';

export default function Button  ({
    children,
    className,
    ...props
}) {
    const style = className ? 'button-general ' + className : 'button-general';
    
    return <button {...props} className={style}>{children}</button>
}