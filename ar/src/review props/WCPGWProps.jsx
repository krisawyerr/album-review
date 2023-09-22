import Test from "/src/Test.jsx";
import WCPGWData from "/src/albumData/WCPGWData.js";

export default function WCPGWProps() {
    let data = WCPGWData.map(function (item){
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