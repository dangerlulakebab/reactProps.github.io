function Student(props) {

    return(
        <div className="student">
            <p>name: {props.name}</p>
            <p>age: {props.age}</p>
            <p>is Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )

}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student