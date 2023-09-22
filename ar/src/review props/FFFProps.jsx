import Test from "/src/Test.jsx";
import FFFData from "/src/albumData/FFFData.js";

export default function FFFProps() {
    let data = FFFData.map(function (item){
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