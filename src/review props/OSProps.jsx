import Test from "/src/Test.jsx";
import OSData from "/src/albumData/OSData.js";

export default function OSProps() {
    let data = OSData.map(function (item){
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