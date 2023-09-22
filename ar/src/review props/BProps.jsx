import Test from "/src/Test.jsx";
import BData from "/src/albumData/BData.js";

export default function BProps() {
    let data = BData.map(function (item){
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