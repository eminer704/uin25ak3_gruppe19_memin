import { Routes, Route } from 'react-router-dom'
import Medlemslist from './components/Medlemslist'
import Profil from './components/Profil'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      {/* Viser navigasjonsmenyen på toppen av siden */}
      <Navbar />

      {/* Definerer ruter for nettstedet */}
      <Routes>
        {/* Viser medlemsliste og arbeidslogg */}
        <Route path="/" element={<Medlemslist />} />

        {/* Profilside: viser info for ett spesifikt medlem */}
        <Route path="/profil/:id" element={<Profil />} />
      </Routes>
    </>
  )
}

export default App


