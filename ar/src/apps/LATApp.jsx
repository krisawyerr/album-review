import Navbar from "/src/Navbar.jsx"
import Key from "/src/Key.jsx"
import LATProps from "/src/review props/LATProps.jsx"

export default function LATApp() {
  return (
    <div className="wholePage">
      <div>
        <Navbar />
        <Key />
        <LATProps />
      </div>
    </div>
  )
}
