const niveis = {
    nivel1: {
        coelhosIniciais: [
            { genotipo: 'PP', imagem: 'bunny-black.png' },
            { genotipo: 'pp', imagem: 'bunny-white.png' }
        ],
        objetivos: [
            { genotipo: 'PP', quantidade: 2 },
            { genotipo: 'Pp', quantidade: 3 },
            { genotipo: 'pp', quantidade: 2 }
        ]
    },
    nivel2: {
        coelhosIniciais: [
            { genotipo: 'BB', imagem: 'bunny-black.png' },
            { genotipo: 'BC', imagem: 'bunny-gray.png' },
            { genotipo: 'CC', imagem: 'bunny-white.png' }
        ],
        objetivos: [
            { genotipo: 'BB', quantidade: 1 },
            { genotipo: 'BC', quantidade: 2 },
            { genotipo: 'CC', quantidade: 1 }
        ]
    },
    nivel3: {
        coelhosIniciais: [
            { genotipo: 'AA', imagem: 'bunny-black.png' },
            { genotipo: 'Aa', imagem: 'bunny-gray.png' },
            { genotipo: 'aa', imagem: 'bunny-white.png' }
        ],
        objetivos: [
            { genotipo: 'AA', quantidade: 1 },
            { genotipo: 'Aa', quantidade: 2 },
            { genotipo: 'aa', quantidade: 1 }
        ]
    },
    // Adicione outros níveis conforme necessário
};

export default niveis;
