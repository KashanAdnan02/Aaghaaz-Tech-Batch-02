import NestedComponent from "./NestedComponent"

function Mycomponent() {
    return (
        <div>
            <div className="myDiv">I am Component</div>
            <NestedComponent />
        </div>
    )
}

export default Mycomponent