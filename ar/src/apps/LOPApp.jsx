import Navbar from "/src/Navbar.jsx"
import Key from "/src/Key.jsx"
import LOPProps from "/src/review props/LOPProps.jsx"

export default function LOPApp() {
  return (
    <div className="wholePage">
      <div>
        <Navbar />
        <Key />
        <LOPProps />
      </div>
    </div>
  )
}
