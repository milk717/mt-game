import {useEffect, useState} from "react";
import {Button, TextField} from "@mui/material";
import styled from "styled-components";
import {teamText} from "../resource/strings";
import {useNavigate} from "react-router-dom";

const PageWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: clac(100%-20px);
`;

const ListWrap = styled.div`
  margin: 20px;
`

const TextInput = styled(TextField)`
  width: 100%;
`

export default function TeamInputContainer() {
    const navigate = useNavigate();
    const [teamName, setTeamName] = useState(JSON.parse(localStorage.getItem('team')) || {});

    useEffect(()=>{
        localStorage.setItem('team',JSON.stringify(teamName));
    },[teamName])

    const handleTeamInput = (event, key) => {
        setTeamName({
            ...teamName,
            [key]:event.target.value
        });
    }

    const handleSubmit = () =>{
        localStorage.setItem('team',JSON.stringify(teamName));
        navigate('/people/quiz')
    }

    return (
        <PageWrap>
            {
                teamText.map((item)=>
                    <ListWrap key={item.key}>
                        <TextInput id="outlined-basic" variant="outlined" placeholder={item.placeholder}
                                   onChange={(e)=>handleTeamInput(e, item.key)}
                                   value={teamName[item.key]}
                        />
                    </ListWrap>
                )
            }
            <Button variant='contained' onClick={(e)=>handleSubmit(e)}>입력 완료</Button>
        </PageWrap>
    );
}