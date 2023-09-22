import Navbar from "/src/Navbar.jsx"
import Key from "/src/Key.jsx"
import BProps from "/src/review props/BProps.jsx"

export default function BApp() {
  return (
    <div className="wholePage">
      <div>
        <Navbar />
        <Key />
        <BProps />
      </div>
    </div>
  )
}
