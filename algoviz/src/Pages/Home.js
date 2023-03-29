import back from "../Imgs/cool-background.png"
import styled from "styled-components";
import AlgoCard from "../Components/AlgoCard";
import dijkstraImg from "../Imgs/dijsktras_algorithm_cpp.jpg";
import heapImg from "../Imgs/python_heap_(1).jpg"

const Home = () => {

    return (
        <PageContainer>
            <StyledHeader>Welcome to my course work</StyledHeader>
            <p>this project is algorithm vizualization tool.
                You can use it to improve your algorithmic knowledge</p>
            <Container>
                <AlgoCard img={dijkstraImg} size={200} name={"Dijkstra Algorithm"} link={"/dijkstra"}/>
                <AlgoCard img={heapImg} size={200} name={"Heap data structure"} link={"/heap"}/>
            </Container>
        </PageContainer>
    )
}


const Container = styled.div`
  display: flex;
`;

const PageContainer = styled.div`
  color: wheat;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: url(${back});
  background-size: cover;
`;

const StyledHeader = styled.h1`
  font-weight: bold;
  font-size: 36px;
`;

export default Home;