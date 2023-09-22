import Navbar from "/src/Navbar.jsx"
import Key from "/src/Key.jsx"
import ITTProps from "/src/review props/ITTProps.jsx"

export default function ITTApp() {
  return (
    <div className="wholePage">
      <div>
        <Navbar />
        <Key />
        <ITTProps />
      </div>
    </div>
  )
}
