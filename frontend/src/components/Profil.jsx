// Importerer nødvendige hooks og Sanity-klienten
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { client } from "../lib/client"

export default function Profil() {
    // Henter medlems ID fra URL 
    const { id } = useParams()

    // Oppretter en state for å lagre medlemsdata
    const [medlem, setMedlem] = useState(null)

    // Henter medlemsdata fra Sanity når komponenten laster
    useEffect(() => {
        const fetchData = async () => {
            // GROQ-spørring for å hente ett spesifikt medlem basert på ID
            const query = `*[_type == "medlem" && _id == "${id}"][0]{
        navn,
        epost,
        bilde {
          asset -> {
            url
          }
        },
        bio,
        interesser,
        arbeidslogg
      }`

            // Kjører spørringen og lagrer resultatet i state
            const data = await client.fetch(query)
            setMedlem(data)
        }

        fetchData()
    }, [id])

    // Viser lastemelding hvis data ikke er klart enda
    if (!medlem) {
        return <p>Laster data...</p>
    }

    // Viser profilinformasjon hvis data finnes
    return (
        <div className="profil-container">
            {/* Navn som overskrift */}
            <h2 style={{ textAlign: "center" }}>{medlem.navn}</h2>

            {/* Viser profilbilde */}
            <img
                src={medlem.bilde?.asset?.url}
                alt={medlem.navn}
                className="profil-bilde"
            />

            {/* Kontaktinfo og biografi */}
            <div className="profil-info">
                <p><strong>E-post:</strong> {medlem.epost}</p>
                <p><strong>Biografi:</strong> {medlem.bio}</p>
            </div>

            {/* Interesseliste */}
            <div className="profil-interesser">
                <h3>Interesser</h3>
                <ul>
                    {medlem.interesser?.map((interesse, i) => (
                        <li key={i}>{interesse}</li>
                    ))}
                </ul>
            </div>

            {/* Arbeidslogg i tabellform */}
            <div className="arbeidslogg">
                <h3>Arbeidslogg</h3>
                <table className="logg-table">
                    <thead>
                        <tr>
                            <th>Dato</th>
                            <th>Oppgave</th>
                            <th>Timer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medlem.arbeidslogg?.map((logg, i) => (
                            <tr key={i}>
                                <td>{logg.dato}</td>
                                <td>{logg.oppgave}</td>
                                <td>{logg.tid}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
