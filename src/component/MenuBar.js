import {useNavigate} from "react-router-dom";
import styled from 'styled-components';
import {viewWidthCalc} from "../utils/ViewportCalculate";


const MenuBox = styled.div`
  background-color: #1E2235;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > h1 {
    color: #EFEFEF;
  }
`

export const Button = styled.button`
  background-color: #404660;
  color: #EFEFEF;
  font-size: ${viewWidthCalc(30,{})};
  font-weight: 600;
  cursor: pointer;
  margin: 10px;
  padding: 10px;
  text-align: center;
  border: none;
  width: ${viewWidthCalc(100,{})};
  background-size: 300% 100%;
  border-radius: 50px;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
  visibility: ${props => props.visibility};
  &&:hover {
    background-position: 100% 0;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
  }
`;

export default function MenuBar({menuName='여주린노 MT'}){
    const navigate = useNavigate();
    const handleHome = () =>{
        localStorage.clear();
        navigate('/')
    }

    return(
        <MenuBox>
            <Button onClick={handleHome}>홈</Button>
            <h1>{menuName}</h1>
            <Button visibility={'hidden'}>홈</Button>
        </MenuBox>
    )
}