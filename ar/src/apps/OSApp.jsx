import Navbar from "/src/Navbar.jsx"
import Key from "/src/Key.jsx"
import OSProps from "/src/review props/OSProps.jsx"

export default function OSApp() {
  return (
    <div className="wholePage">
      <div>
        <Navbar />
        <Key />
        <OSProps />
      </div>
    </div>
  )
}
