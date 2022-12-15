import ListView from "../component/ListView";
import {menuList} from "../resource/strings";

export default function BodyLanguageContainer(){
    return(
        <>
            <ListView listContent={menuList.bodyLanguageSubject}/>
        </>
    )
}