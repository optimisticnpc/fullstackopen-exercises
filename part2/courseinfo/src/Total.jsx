const Total = (props) => {
    return (
        <div>
            {/* Reduce is used */}
            <p><b>total of {props.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</b></p>
        </div>
    )
}




export default Total