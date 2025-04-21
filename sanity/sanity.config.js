
// Konfigurasjon for Sanity Studio – definerer prosjekt-ID, datasett, plugins og skjema
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'hjemmeside_ak3',

  projectId: 'xxa0bjx4',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
