const Course = (props) => {
    const { course } = props
    return (
        <div>
            <Title course={ course.name } />
            <Description parts={ course.parts } />
            <Total parts={ course.parts } />
        </div>
    )
}

const Title = ({ course }) => {
    return <h1>{ course }</h1>
}

const Description = (props) => {
    console.log(props)
    const { parts } = props
    const listItems = parts.map((item) => <p key={ item.name }> { item.name } { item.exercises } </p>)

    return (
        <>
            { listItems }
        </>
    )
}

const Total = (props) => {
    console.log(props)
    const { parts } = props
    const msg = 'Number of exercises '
    let sum = parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0);
    return (
        <p>
            { msg }  { sum }
        </p>
    )
}

export default Course