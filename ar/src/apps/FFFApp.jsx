import Navbar from "/src/Navbar.jsx"
import Key from "/src/Key.jsx"
import FFFProps from "/src/review props/FFFProps.jsx"

export default function FFFApp() {
  return (
    <div className="wholePage">
      <div>
        <Navbar />
        <Key />
        <FFFProps />
      </div>
    </div>
  )
}
