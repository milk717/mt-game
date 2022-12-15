import MenuBar from "../component/MenuBar";
import ListView from "../component/ListView";
import {menuList} from "../resource/strings";
import {Outlet} from "react-router-dom";

export default function MainPage(){

    return(
        <>
            <MenuBar/>
            <Outlet/>
        </>
    );
}