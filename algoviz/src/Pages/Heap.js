import styled from "styled-components";
import {useRef, useState} from "react";
import back from "../Imgs/cool-background.png";
import correctIcon from "../Imgs/correct.png";
import trashIcon from "../Imgs/trashcan.png";

const Heap = () => {
    const [heap, setHeap] = useState([]);
    const nodesTopPosition = ["100px", "200px", "200px", "300px", "300px", "300px", "300px", "400px", "400px", "400px"
        , "400px", "400px", "400px", "400px", "400px"];
    const nodesLeftPosition = ["400px", "220px", "580px", "130px", "310px", "490px", "670px", "90px", "170px", "270px",
        "350px", "450px", "530px", "630px", "710px"];
    const addInputRef = useRef();
    const deleteInputRef = useRef();

    const addNode = () => {
        const inputValue = addInputRef.current.value;
        const newHeap = [...heap];
        newHeap.push(inputValue);
        setHeap(newHeap);
    }

    const deleteNode = () => {
        const inputValue = deleteInputRef.current.value;
        const newHeap = [...heap];
        newHeap.splice(newHeap.indexOf(inputValue), 1);
        setHeap(newHeap);
    }


    const getTree = (arr) => {
        let jsxArr = [];
        for (let i = 0; i < arr.length; i++) {
            jsxArr.push(<Node top={nodesTopPosition[i]}
                              left={nodesLeftPosition[i]}>
                {arr[i]}</Node>);

        }
        return jsxArr;
    }


    return (
        <>
            <StyledHeader>
                Add:
                <Input ref={addInputRef} />
                <img src={correctIcon} alt="correctIcon" style={{marginRight: 10}} onClick={addNode}/>
                Delete:
                <Input ref={deleteInputRef}/>
                <img src={trashIcon} alt="trashIcon" style={{width: 24}} onClick={deleteNode}/>
            </StyledHeader>
            {getTree(heap)}
        </>
    )
}


const Input = styled.input`
  margin: 0 10px;
  width: 100px;
  height: 20px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
`

const StyledHeader = styled.header`
  padding: 10px;
  display: flex;
  background-image: url(${back});
  height: 60px;
  color: white;
  align-items: center;
`;

const Node = styled.div`
  position: absolute;
  top: ${props => props.top || "400px"};
  left: ${props => props.left || "440px"};
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

export default Heap;