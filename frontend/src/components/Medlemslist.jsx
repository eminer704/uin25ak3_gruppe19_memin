import { useEffect, useState } from "react"
import { client } from "../lib/client"
import { Link } from "react-router-dom"

export default function Medlemslist() {
    // Lager en state for å lagre alle medlemmer
    const [medlemmer, setMedlemmer] = useState([])

    // Henter data fra Sanity når komponenten laster
    useEffect(() => {
        const fetchData = async () => {
            // GROQ-spørring som henter alle medlemmer med bilde og arbeidslogg
            const data = await client.fetch(`*[_type == "medlem"]{
                _id,
                navn,
                epost,
                bilde {
                    asset -> {
                        url
                    }
                },
                arbeidslogg
            }`)
            setMedlemmer(data)
        }

        fetchData()
    }, [])

    return (
        <div className="main-container">
            {/* Seksjon for medlemskort */}
            <h2 className="section-title">Gruppemedlemmer</h2>
            <div className="medlem-container">
                {medlemmer.map((m) => (
                    <Link key={m._id} to={`/profil/${m._id}`} className="medlem-card-link">
                        <div className="medlem-card">
                            <img src={m.bilde?.asset?.url} alt={m.navn} />
                            <h3>{m.navn}</h3>
                            <p>{m.epost}</p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Seksjon for arbeidslogg */}
            <h2 className="section-title">Arbeidslogg</h2>
            <table className="logg-table">
                <thead>
                    <tr>
                        <th>Dato</th>
                        <th>Navn</th>
                        <th>Oppgave</th>
                        <th>Timer</th>
                    </tr>
                </thead>
                <tbody>
                    {medlemmer[0]?.arbeidslogg?.map((logg, i) => (
                        <tr key={i}>
                            <td>{logg.dato}</td>
                            <td>{medlemmer[0].navn}</td>
                            <td>{logg.oppgave}</td>
                            <td>{logg.tid} timer</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
