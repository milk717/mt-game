import ListView from "../component/ListView";
import {menuList} from "../resource/strings";

export default function MainContainer(){
    return(
        <>
            <ListView listContent={menuList.mainMenuList}/>
        </>
    )
}