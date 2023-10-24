import Home from "./apps/Home"
import BApp from "./apps/BApp"
import CMIYGTApp from "./apps/CMIYGTApp"
import FFFApp from "./apps/FFFApp"
import ITTApp from "./apps/ITTApp"
import LATApp from "./apps/LATApp"
import LOPApp from "./apps/LOPApp"
import OSApp from "./apps/OSApp"
import WCPGWApp from "./apps/WCPGWApp"
import {Route, Routes} from 'react-router-dom'


export default function App() {
  return (
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/B' element={<BApp/>}/>
        <Route exact path='/CMIYGT' element={<CMIYGTApp/>}/>
        <Route exact path='/FFF' element={<FFFApp/>}/>
        <Route exact path='/ITT' element={<ITTApp/>}/>
        <Route exact path='/LAT' element={<LATApp/>}/>
        <Route exact path='/LOP' element={<LOPApp/>}/>
        <Route exact path='/OS' element={<OSApp/>}/>
        <Route exact path='/WCPGW' element={<WCPGWApp/>}/>
      </Routes>
  )
}
