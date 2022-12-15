import ButtonGroup from "../component/ButtonGroup";
import {useLocation, useNavigate} from "react-router-dom";
import {bodyLanguageContent, menuList} from "../resource/strings";
import {useEffect, useState} from "react";
import {viewWidthCalc} from "../utils/ViewportCalculate";
import styled from "styled-components";

const ContentWrap = styled.div`
  display: flex;
  justify-content: center;
`

const ContentText = styled.h1`
  font-size: ${viewWidthCalc(200, {})}
`

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`

export default function BodyQuizContainer() {
    const location = useLocation();
    const navigate = useNavigate();
    const subject = menuList.bodyLanguageSubject.find(item => item.url === location.pathname).text;
    const [contentList, setContentList] = useState(bodyLanguageContent[menuList.bodyLanguageSubject.find(item => item.url === location.pathname).value]);
    const [content, setContent] = useState(contentList[0]);
    const [index, setIndex] = useState(Number(localStorage.getItem('index')) || 0);
    const [score, setScore] = useState(Number(Number(localStorage.getItem('score')) || 0));
    const [passContentList, setPassContentList] = useState(JSON.parse(localStorage.getItem('passContent')) || []);

    useEffect(() => {
        localStorage.setItem('index', index.toString())
        setContent(() => contentList[index]);
        if (Number(index) > contentList.length - 1) {
            navigate('/score');
        }
    }, [index])

    //변경된 score 저장하기
    useEffect(() => {
        localStorage.setItem('score', score.toString());
    }, [score])

    //변경된 pass 항목 저장하기
    useEffect(() => {
        localStorage.setItem('passContent', JSON.stringify(passContentList));
    }, [passContentList])

    const handlePassButtonClick = () => {
        if (index < contentList.length) {
            setIndex(() => index + 1);
        }
        setContentList(prevState => prevState.concat(content))
    }

    const handleCorrectButtonClick = () => {
        if (index < contentList.length) {
            setIndex(() => index + 1);
        }
        setScore(prevState => prevState + Number(content.score))
    }

    const handleBackButtonClick = () => {
        if (index > 0) {
            setIndex(() => index - 1);
        }
    }

    console.log(contentList)
    return (
        <>
            <TitleWrap>
                <h2>주제: {subject}</h2>
                <h2>현재 점수: {score}</h2>
            </TitleWrap>
            <ContentWrap>
                <ContentText>{content.text}</ContentText>
            </ContentWrap>
            <ButtonGroup
                onBackButtonClick={handleBackButtonClick}
                onPassButtonClick={handlePassButtonClick}
                onCorrectButtonClick={handleCorrectButtonClick}
            />
        </>
    )
}