import '../../components-css/practice1_parent.css'
export default function Card(props){
    console.log(props.prop)
    return (
        <div className="card">
            <img src={props.prop.imgsrc} alt={props.prop.name} />
            <h2 className="name">{props.prop.name}</h2>
            <h4 className="bounty">{props.prop.bounty}</h4>
            <p className="discription">{props.prop.description}</p>
        </div>
    )
}