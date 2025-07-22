import Btn from "../Btn"

function Card(props) {
    console.log(props)
    return (
        <div className="card1">
            <img src={props.image} alt="" />
            <h1>{props.heading}</h1>
            <p>{props.description}</p>
            <Btn color={props.color} />
        </div>
    )
}

export default Card