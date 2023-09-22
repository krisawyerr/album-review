import Test from "/src/Test.jsx";
import CallMeIfYouGetLostData from "../albumData/CallMeIfYouGetLostData";

export default function CMIYGTProps() {
    let data = CallMeIfYouGetLostData.map(function (item){
        return(
            <Test 
                item={item}
            />
        )
    })

    return (
        <div>
            {data}
        </div>
    )
}