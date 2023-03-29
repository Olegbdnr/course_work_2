import styled from "styled-components";
import {Link} from "react-router-dom";


const AlgoCard = (props) => {


    return (
        <StyledLink to={props.link}>
            <Card>
                <img src={props.img} alt="algo-image" style={{width: props.size}}/>
                <StyledLink to={props.link}>{props.name}</StyledLink>
            </Card>
        </StyledLink>
    )
}

const StyledLink = styled(Link)`
  color: blue;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
`;

const Card = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 300px;
  background-color: whitesmoke;
  border-radius: 10px;
`;

export default AlgoCard;