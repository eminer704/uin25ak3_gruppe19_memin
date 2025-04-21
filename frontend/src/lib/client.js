import { createClient } from '@sanity/client'

// Oppretter og eksporterer en Sanity-klient ved å bruke .env variabler
export const client = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,  // Prosjekt-ID fra .env
    dataset: import.meta.env.VITE_SANITY_DATASET,       // Dataset-navn fra .env
    apiVersion: '2023-01-01',
    useCdn: true                                        // Bruk cache for raskere forespørsler
})

