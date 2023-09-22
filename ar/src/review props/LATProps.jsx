import Test from "/src/Test.jsx";
import LATData from "/src/albumData/LATData.js";

export default function LATProps() {
    let data = LATData.map(function (item){
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