export function obterGenotipoDescendente(genotipo1, genotipo2) {
    const quadradoPunnett = {
        'BB': { 'BB': ['BB'], 'BC': ['BB', 'BC'], 'CC': ['BC'] },
        'BC': { 'BB': ['BB', 'BC'], 'BC': ['BB', 'BC', 'BC', 'CC'], 'CC': ['BC', 'CC'] },
        'CC': { 'BB': ['BC'], 'BC': ['BC', 'CC'], 'CC': ['CC'] }
    };

    const possibilidades = quadradoPunnett[genotipo1][genotipo2];
    const indiceAleatorio = Math.floor(Math.random() * possibilidades.length);
    return possibilidades[indiceAleatorio];
}

export function obterImagemCoelho(genotipo) {
    const imagens = {
        'BB': 'BB.png',
        'BC': 'BC.png',
        'CC': 'CC.png'    };
    return imagens[genotipo];
}
