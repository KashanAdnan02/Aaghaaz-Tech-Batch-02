function Btn(props) {
    console.log("props" , props.color)
    return <button style={{background: props.color}}>Read More</button>
}

export default Btn