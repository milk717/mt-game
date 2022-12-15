import styled from 'styled-components';
import {viewWidthCalc} from "../utils/ViewportCalculate";

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Button = styled.button`
  ${(props) => (props.checked)
          ? `background-color: #404660;`
          : null
  }
  color: ${props => props.checked ? `#fff` : `#1E2235`};
  font-size: ${viewWidthCalc(50, {})};
  font-weight: 600;
  cursor: pointer;
  margin: 10px;
  padding: 10px;
  text-align: center;
  border: none;
  width: ${viewWidthCalc(400, {})};
  background-size: 300% 100%;
  border-radius: 50px;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;

  &&:hover {
    background-position: 100% 0;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
  }
`;

export default function ButtonGroup(
    {
        onBackButtonClick,
        onPassButtonClick,
        onCorrectButtonClick,
        text1 = '이전',
        text2 = '패스',
        text3 = '맞춤',
        checked1 = false,
    }) {
    return (
        <ButtonWrap>
            <Button onClick={onBackButtonClick} checked={checked1}>{text1}</Button>
            <Button onClick={onPassButtonClick}>{text2}</Button>
            <Button onClick={onCorrectButtonClick} checked={true}>{text3}</Button>
        </ButtonWrap>
    )
}