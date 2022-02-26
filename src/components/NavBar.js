import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

// styles
import './NavBar.css'

// components
import SearchBar from './SearchBar'

export default function NavBar() {
  const { color } = useContext(ThemeContext)

  return (
    <div className="navbar" style={{ background: color }}>
        <nav>
            <Link to="/" className="brand">
            <h1>Cooking Guru</h1>
            </Link>
            <SearchBar />
            <Link to="/create"> Create Recipe</Link>
        </nav>
    </div>
  )
}
