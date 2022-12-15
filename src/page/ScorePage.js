import {useNavigate} from "react-router-dom";
import {Button} from "../component/ButtonGroup"
import styled from "styled-components";
import {viewHeightCalc} from "../utils/ViewportCalculate";

const PageWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  &> h1{
    font-size: ${viewHeightCalc(300, {})};
  }
`

export default function ScorePage() {
    const navigate = useNavigate();
    const score = localStorage.getItem('score');

    const handleHome = () => {
        localStorage.clear();
        navigate('/body')
    }
    return (
        <PageWrap>
            <h1>{score}</h1>
            <Button onClick={handleHome}>리스트로 돌아가기</Button>
        </PageWrap>
    )
}