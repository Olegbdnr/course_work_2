import styled from "styled-components";
import {useRef, useState} from "react";
import back from "../Imgs/cool-background.png";
import correctIcon from "../Imgs/correct.png";
import trashIcon from "../Imgs/trashcan.png";
import Node from "../Components/Node";
import {getRightChild, getLeftChild, getParent, getMin} from "../Utils/minHeapUtils";

const Heap = () => {
    const [heap, setHeap] = useState([]);
    const ROOT_CSS_POSITION_LEFT = 700;
    const addInputRef = useRef();
    const deleteInputRef = useRef();
    console.log(heap);

    const heapify = (index, arr) => {

        console.log(arr);

        let left = getLeftChild(index);
        let right = getRightChild(index);

        let smallest = index;

        console.log(arr.length + " - length")

        if (left < arr.length && arr[left] < arr[index]) {
            smallest = left;
        }

        if (right < arr.length && arr[right] < arr[smallest]) {
            smallest = right;
        }

        if (smallest !== index) {
            let temp = arr[index];
            arr[index] = arr[smallest];
            arr[smallest] = temp;
            heapify(smallest, arr);
        }

    }

    const deleteMin = (arr) => {
        const newHeap = arr;

        newHeap[0] = newHeap[newHeap.length - 1];

        newHeap.pop();

        heapify(0, newHeap);

        setHeap(newHeap)
    }


    const getParentLeftPosition = (parentIndex, treeHeightForChild) => {
        const cssLeftValues = [280, 240, 120, 40, 60];
        if (parentIndex <= 0) {
            return ROOT_CSS_POSITION_LEFT;
        } else {
            let grandParent = getParent(parentIndex);
            if (parentIndex % 2 === 0) {
                return getParentLeftPosition(grandParent, treeHeightForChild - 1) + cssLeftValues[treeHeightForChild - 1];
            } else {
                return getParentLeftPosition(grandParent, treeHeightForChild - 1) - cssLeftValues[treeHeightForChild - 1];
            }
        }
    }

    const getTree = () => {
        return heap.map((node) => {
            let currentIndex = heap.indexOf(node);
            let treeHeight = Math.floor(Math.log2(currentIndex + 1));
            if (currentIndex === 0) {
                treeHeight = 0;
            }
            const cssLeftValues = [280, 240, 120, 40, 60];
            let cssTopValues = [150, 250, 350, 450, 550];
            let currentTopPosition = cssTopValues[treeHeight];
            let currentLeftPosition = ROOT_CSS_POSITION_LEFT;
            let parentLeftPosition = getParentLeftPosition(getParent(currentIndex), treeHeight);
            if (currentIndex > 0) {
                currentLeftPosition = currentIndex % 2 === 0 ? parentLeftPosition + cssLeftValues[treeHeight] : parentLeftPosition - cssLeftValues[treeHeight];
            }
            let leftChildPresent = getLeftChild(currentIndex) <= heap.length - 1;
            let rightChildPresent = getRightChild(currentIndex) <= heap.length - 1;
            return <Node top={currentTopPosition} left={currentLeftPosition} value={node}
                         leftChild={leftChildPresent}
                         rightChild={rightChildPresent} key={currentIndex}
                         treeHeight={treeHeight}
                         index={currentIndex}/>
        })
    }

    const deleteAll = () => {
        const newHeap = [];
        setHeap(newHeap);
    }


    const addNode = () => {
        if (heap.length !== 15) {
            const inputValue = parseInt(addInputRef.current.value);
            const newHeap = [...heap];
            newHeap.push(inputValue);
            let curr = newHeap.length - 1;
            while (curr > 0 && newHeap[getParent(curr)] > newHeap[curr]) {
                let parent = newHeap[getParent(curr)];
                newHeap[getParent(curr)] = newHeap[curr];
                newHeap[curr] = parent;
                curr = getParent(curr);
            }
            setHeap(newHeap);
        } else {
            alert("You reached maximum number of elements in heap, which is '15'");
        }
    }

    const deleteNode = () => {
        const inputValue = deleteInputRef.current.value;
        const newHeap = [...heap];

        const index = newHeap.indexOf(parseInt(inputValue));

        newHeap[index] = getMin(newHeap) - 1;

        let curr = index;
        while (curr > 0 && newHeap[getParent(curr)] > newHeap[curr]) {
            let temp = newHeap[getParent(curr)];
            newHeap[getParent(curr)] = newHeap[curr];
            newHeap[curr] = temp;
            curr = getParent(curr);
        }

        deleteMin(newHeap);

    }


    return (<>
            <StyledHeader>
                Add:
                <Input ref={addInputRef}/>
                <img src={correctIcon} alt="correctIcon" style={{marginRight: 10, cursor: "pointer"}}
                     onClick={addNode}/>
                Delete:
                <Input ref={deleteInputRef}/>
                <img src={trashIcon} alt="trashIcon" style={{width: 24, cursor: "pointer"}} onClick={deleteNode}/>
                <p style={{color: "red", marginLeft: 10, cursor: "pointer"}} onClick={deleteAll}><b>All</b></p>
            </StyledHeader>
            {getTree()}
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
`;

const StyledHeader = styled.header`
  padding: 10px;
  display: flex;
  background-image: url(${back});
  height: 60px;
  color: white;
  align-items: center;
`;


export default Heap;