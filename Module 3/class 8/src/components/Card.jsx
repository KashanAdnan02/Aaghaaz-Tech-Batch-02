function Card(props) {
    return (
        <div style={{ background: 'red', width: 300, margin: 10 }}>
            <h1>{props.item.title}</h1>
            <p>{props.item.completed}</p>
        </div>
    )
}

export default Card