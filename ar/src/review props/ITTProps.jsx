import Test from "/src/Test.jsx";
import IToldThemData from "/src/albumData/IToldThemData.js";

export default function ITTProps() {
    let data = IToldThemData.map(function (item){
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