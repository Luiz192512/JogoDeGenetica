import GeradorCoelhos from './geradorCoelhos.js';
import niveis from './niveis.js';

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const nivel = params.get('nivel');
    const tituloNivel = document.getElementById('titulo-nivel');

    if (niveis[nivel]) {
        tituloNivel.textContent = `Nível ${nivel.replace('nivel', '')}`;
        iniciarNivel(niveis[nivel]);
    } else {
        tituloNivel.textContent = 'Nível não encontrado';
    }
});

function iniciarNivel(nivelConfig) {
    const coelhosContainer = document.getElementById('coelhos-container');
    const botaoSelecionar = document.getElementById('botao-selecionar');
    const faseConcluida = document.getElementById('fase-concluida');

    nivelConfig.coelhosIniciais.forEach(coelho => {
        const container = document.createElement('div');
        container.classList.add('coelho-container');
        container.setAttribute('data-genotipo', coelho.genotipo);

        const imagem = document.createElement('img');
        imagem.src = coelho.imagem;
        imagem.classList.add('coelho');
        imagem.setAttribute('data-genotipo', coelho.genotipo);

        const etiquetaGenotipo = document.createElement('span');
        etiquetaGenotipo.classList.add('etiqueta-genotipo');
        etiquetaGenotipo.textContent = coelho.genotipo;

        container.appendChild(imagem);
        container.appendChild(etiquetaGenotipo);
        coelhosContainer.appendChild(container);
    });

    const geradorCoelhos = new GeradorCoelhos(nivelConfig.objetivos, coelhosContainer, botaoSelecionar, faseConcluida);
}
