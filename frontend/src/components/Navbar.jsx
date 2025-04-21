
// Enkel navigasjonslinje med lenker til Hjem og profilside
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav
            style={{
                backgroundColor: '#4B0082',
                padding: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: 'white',
                fontSize: '1.1rem'
            }}
        >
            <div style={{ fontWeight: 'bold' }}>TEAM 19</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Hjem</Link>
                <span>|</span>
                <Link
                    to="/profil/cec43e6b-8bc6-457b-9521-f361bb07dd12"
                    style={{ color: 'white', textDecoration: 'none' }}
                >
                    M.Emin Ercetin
                </Link>
            </div>
        </nav>
    )
}

