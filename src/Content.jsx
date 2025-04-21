const Content = (props) => {
  return(
    <div>
        <p>{props.part1} : {props.exercises1} exercises</p>
        <p>{props.part2} : {props.exercises2} exercises</p>
        <p>{props.part3} : {props.exercises3} exercises</p>
    </div>
  )
}

export default Content;