import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <nav style={{ margin: 10 }}>
      <Link to="/" style={{ padding: 5 }}>
        Accueil
      </Link>
        <Link to="/annuaire" style={{ padding: 5 }}>
          Annuaire
        </Link>
    </nav>
    )
}