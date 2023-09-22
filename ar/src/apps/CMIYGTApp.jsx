import Navbar from "/src/Navbar.jsx"
import Key from "/src/Key.jsx"
import CMIYGTProps from "/src/review props/CMIYGTProps.jsx"

export default function CMIYGTApp() {
  return (
    <div className="wholePage">
      <div>
        <Navbar />
        <Key />
        <CMIYGTProps />
      </div>
    </div>
  )
}
