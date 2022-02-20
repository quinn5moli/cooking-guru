import { Link } from 'react-router-dom'

// styles
import './NavBar.css'

export default function NavBar() {
  return (
    <div className="navbar">
        <nav>
            <Link to="/" className="brand">
            <h1>Cooking Guru</h1>
            </Link>
            <Link to="/create"> Create Recipe</Link>
        </nav>
    </div>
  )
}
