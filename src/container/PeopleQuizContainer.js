import ButtonGroup from "../component/ButtonGroup";
import {useLocation, useNavigate} from "react-router-dom";
import {bodyLanguageContent, menuList, peopleContent} from "../resource/strings";
import {useEffect, useState} from "react";
import {viewHeightCalc, viewWidthCalc} from "../utils/ViewportCalculate";
import styled from "styled-components";
import MenuBar from "../component/MenuBar";
import {Button} from "@mui/material";

const PageWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const ContentWrap = styled.div`
  display: flex;
  justify-content: center;
`

const ImgWrap = styled.img`
  height: ${viewHeightCalc(650,{})};
`

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export default function PeopleQuizContainer() {
    const navigate = useNavigate();
    const teamName = JSON.parse(localStorage.getItem('team')) || {};
    const [score, setScore] = useState(JSON.parse(localStorage.getItem('teamScore'))||{
        team1: 0,
        team2: 0,
        team3: 0,
    });
    const [image, setImage] = useState(localStorage.getItem('imageUrl')||peopleContent[0].url)
    const [index, setIndex] = useState(Number(localStorage.getItem('index')) || 0);

    useEffect(() => {
        localStorage.setItem('teamScore', JSON.stringify(score))
    },[score])

    useEffect(() => {
        setImage(peopleContent[index].url)
    },[index])

    useEffect(() => {
        localStorage.setItem('imageUrl', image.toString())
    },[image])

    //team1 점수 획득
    const handleBackButtonClick = () => {
        if (index < peopleContent.length-1){
            setScore(prevState => (
                {
                    ...prevState,
                    team1: prevState.team1 + 10
                }
            ));
            setIndex(index+1);
        }
    }

    //team2 점수 획득
    const handlePassButtonClick = () => {
        if (index < peopleContent.length-1){
            setScore(prevState => (
                {
                    ...prevState,
                    team2: prevState.team2 + 10
                }
            ));
            setIndex(index+1);
        }
    }

    //team3 점수 획득
    const handleCorrectButtonClick = () => {
        if (index < peopleContent.length-1){
            setScore(prevState => (
                {
                    ...prevState,
                    team3: prevState.team3 + 10
                }
            ));
            setIndex(index+1);
        }
    }

    return (
        <PageWrap>
            <MenuBar menuName={'인물 퀴즈'}/>
            <TitleWrap>
                <h2>{teamName.team1}: {score.team1}</h2>
                <h2>{teamName.team2}: {score.team2}</h2>
                <h2>{teamName.team3}: {score.team3}</h2>
            </TitleWrap>
            <ContentWrap>
                <ImgWrap src={`/images/${image}`} alt={'인물'}/>
            </ContentWrap>
            <ButtonGroup
                onBackButtonClick={handleBackButtonClick}
                onPassButtonClick={handlePassButtonClick}
                onCorrectButtonClick={handleCorrectButtonClick}
                text1={`${teamName.team1} 정답`}
                text2={`${teamName.team2} 정답`}
                text3={`${teamName.team3} 정답`}
                checked1={true}
            />
            <Button>아무도 못맞춤</Button>
        </PageWrap>
    )
}