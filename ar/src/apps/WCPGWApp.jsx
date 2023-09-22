import Navbar from "/src/Navbar.jsx"
import Key from "/src/Key.jsx"
import WCPGWProps from "/src/review props/WCPGWProps.jsx"

export default function WCPGWApp() {
  return (
    <div className="wholePage">
      <div>
        <Navbar />
        <Key />
        <WCPGWProps />
      </div>
    </div>
  )
}
