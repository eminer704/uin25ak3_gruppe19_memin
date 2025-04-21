export default {
    name: 'medlem',
    type: 'document',
    title: 'Medlem',
    fields: [
        { name: 'navn', type: 'string', title: 'Navn' },
        { name: 'epost', type: 'string', title: 'E-post' },
        { name: 'bilde', type: 'image', title: 'Bilde' },
        { name: 'bio', type: 'text', title: 'Biografi' },
        {
            name: 'interesser',
            type: 'array',
            title: 'Interesser',
            of: [{ type: 'string' }]
        },
        {
            name: 'arbeidslogg',
            type: 'array',
            title: 'Arbeidslogg',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'dato', type: 'date', title: 'Dato' },
                        { name: 'oppgave', type: 'string', title: 'Oppgave' },
                        { name: 'tid', type: 'number', title: 'Timer brukt' }
                    ]
                }
            ]
        }
    ]
}
