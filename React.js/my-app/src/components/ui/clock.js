export default function Clock(props){
    return (
        <>
            <div>Hello, World!</div>
            <div>It is {props.date.toLocaleTimeString()}</div>
        </>
    )
}
