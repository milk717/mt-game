import {Link} from "react-router-dom";
import styled from "styled-components";
import {viewWidthCalc} from "../utils/ViewportCalculate";

export const Button = styled.button`
  background-color: #94A69F;
  font-size: ${viewWidthCalc(50, {})};
  font-weight: 600;
  cursor: pointer;
  margin: 10px;
  padding: 10px;
  text-align: center;
  border: none;
  width: clac(100%-10px);
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

const StyeldLink = styled(Link)`
  text-decoration: none;
  color: #1E2235;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextBox = styled.p`
  font-size: ${props => viewWidthCalc(props.fontSize, {})};
`
const RowWrap = styled.div`
  display: flex;
  justify-content: center;
`


export default function ListView({listContent}) {

    return (
        <ListWrap>
            {
                listContent.map(item =>
                    <Button>
                        <StyeldLink key={item.url} to={item.url}>
                            <TextBox fontSize={50}>{item.text}</TextBox>
                            <RowWrap>
                                <TextBox fontSize={30}>{item.difficulty
                                    ? `난이도 ${item.difficulty},`
                                    : null
                                }</TextBox>
                                <TextBox fontSize={30}>{item.detail
                                    ? `${item.detail}`
                                    : null
                                }</TextBox>
                            </RowWrap>
                        </StyeldLink>
                    </Button>
                )
            }
        </ListWrap>
    );
}