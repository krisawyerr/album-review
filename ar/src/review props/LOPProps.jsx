import Test from "/src/Test.jsx";
import LifeOfPabloData from "../albumData/LifeOfPabloData";

export default function LOPProps() {
    let data = LifeOfPabloData.map(function (item){
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