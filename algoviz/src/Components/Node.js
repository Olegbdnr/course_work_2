import styled from "styled-components";


const Node = (props) => {
    const edgeRotationAngleValues = [20, 40, 70, 70];
    const edgeTopValues = [230, 325, 420];
    const edgeLeftValues = [205, 95, 35];
    const edgeWidthValues = [228, 115, 63];


    const getWidthOfEdge = () => {
        return edgeWidthValues[props.treeHeight]
    }


    const getTopForEdge = () => {
        return edgeTopValues[props.treeHeight];
    }

    const getRotationAngle = () => {
        return edgeRotationAngleValues[props.treeHeight];
    }


    if (props.leftChild === true && props.rightChild === true) {
        return (
            <>
                <Circle top={props.top + "px"} left={props.left + "px"}>{props.value}</Circle>
                <Edge top={getTopForEdge()} left={props.left - edgeLeftValues[props.treeHeight]} rotate="left"
                      angle={getRotationAngle()} width={getWidthOfEdge()}/>
                <Edge top={getTopForEdge()} left={props.left + 18} rotate="right" angle={getRotationAngle()}
                      width={getWidthOfEdge()}/>
            </>
        )
    }

    if (props.leftChild === true) {
        return (
            <>
                <Circle top={props.top + "px"} left={props.left + "px"}>{props.value}</Circle>
                <Edge top={getTopForEdge()} left={props.left - edgeLeftValues[props.treeHeight]} rotate="left"
                      angle={getRotationAngle()} width={getWidthOfEdge()}/>
            </>
        )
    }
    if (props.rightChild === true) {
        return (
            <>
                <Circle top={props.top + "px"} left={props.left + "px"}>{props.value}</Circle>
                <Edge top={getTopForEdge()} left={props.left + 18} rotate="right" angle={getRotationAngle()}
                      width={getWidthOfEdge()}/>
            </>
        )
    }

    return (
        <>
            <Circle top={props.top + "px"} left={props.left + "px"}>{props.value}</Circle>
        </>
    )
}

const Circle = styled.div`
  position: absolute;
  left: ${props => props.left};
  top: ${props => props.top};
  width: 40px;
  height: 40px;
  border: 2px black solid;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  border-radius: 100%;
  font-weight: bold;
`;

const Edge = styled.hr`
  margin: 0;
  position: absolute;
  width: ${props => props.width + "px"};
  top: ${props => props.top + "px"};
  left: ${(props) => props.left + "px"};
  transform: rotate(${props => {
    if (props.rotate === "left") {
      return -1 * props.angle + "deg";
    } else {
      return props.angle + "deg";
    }
  }});
  background-color: black;
  border: black solid 1.5px;
  border-radius: 10px;
`;


export default Node;