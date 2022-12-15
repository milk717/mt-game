import {Outlet} from "react-router-dom";
import MenuBar from "../component/MenuBar";

export default function QuizPage(){
    return(
        <>
            <MenuBar menuName={'몸으로 말해요'}/>
            <Outlet/>
        </>
    );
}