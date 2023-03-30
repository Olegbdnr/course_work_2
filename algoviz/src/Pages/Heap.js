import styled from "styled-components";
import {useState} from "react";
import back from "../Imgs/cool-background.png";

const Heap = () => {
    const [heap, setHeap] = useState([1, 3, 5, 78, 6, 10, 6]);
    const nodesTopPosition = ["100px", "200px", "200px", "300px", "300px", "300px", "300px", "400px", "400px", "400px"
        , "400px", "400px", "400px", "400px", "400px"];
    const nodesLeftPosition = ["400px", "220px", "580px", "130px", "310px", "490px", "670px", "90px", "170px", "270px",
        "350px", "450px", "530px", "630px", "710px"];

    const getTree = (arr) => {
        let jsxArr = [];
        for (let i = 0; i < arr.length; i++) {
            jsxArr.unshift(<Node top={nodesTopPosition[i]}
                                 left={nodesLeftPosition[i]}>
                {arr[i]}</Node>);

        }
        console.log(jsxArr);
        return jsxArr;
    }


    return (
        <>
            <StyledHeader>
                Add:
                <Input/>
                <Button color="lightgreen">Add</Button>
                Delete:
                <Input/>
                <Button color="lightgreen">Add</Button>
            </StyledHeader>
            <Node top={nodesTopPosition[0]} left={nodesLeftPosition[0]}>5</Node>
            <Node top={nodesTopPosition[1]} left={nodesLeftPosition[1]}>4</Node>
            <Node top={nodesTopPosition[2]} left={nodesLeftPosition[2]}>3</Node>
            <Node top={nodesTopPosition[3]} left={nodesLeftPosition[3]}>2</Node>
            <Node top={nodesTopPosition[4]} left={nodesLeftPosition[4]}>2</Node>
            <Node top={nodesTopPosition[5]} left={nodesLeftPosition[5]}>2</Node>
            <Node top={nodesTopPosition[6]} left={nodesLeftPosition[6]}>2</Node>
            <Node top={nodesTopPosition[7]} left={nodesLeftPosition[7]}>2</Node>
            <Node top={nodesTopPosition[8]} left={nodesLeftPosition[8]}>2</Node>
            <Node top={nodesTopPosition[9]} left={nodesLeftPosition[9]}>2</Node>
            <Node top={nodesTopPosition[10]} left={nodesLeftPosition[10]}>2</Node>
            <Node top={nodesTopPosition[11]} left={nodesLeftPosition[11]}>2</Node>
            <Node top={nodesTopPosition[12]} left={nodesLeftPosition[12]}>2</Node>
            <Node top={nodesTopPosition[13]} left={nodesLeftPosition[13]}>2</Node>
            <Node top={nodesTopPosition[14]} left={nodesLeftPosition[14]}>2</Node>
        </>
    )
}

const Button = styled.button`
  width: 70px;
  height: 20px;
  margin-right: 10px;
  border-radius: 4px;
  border: none;
  background-color: ${props => props.color};

`;

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