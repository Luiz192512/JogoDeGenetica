import GeradorCoelhos from './geradorCoelhos.js';
import niveis from './niveis.js';

document.addEventListener('DOMContentLoaded', () => {
    const fases = document.querySelectorAll('.fase');

    fases.forEach(fase => {
        fase.addEventListener('click', (event) => {
            const nivel = event.currentTarget.getAttribute('data-nivel');
            window.location.href = `nivel.html?nivel=${nivel}`;
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const selecaoNivel = document.getElementById('selecao-nivel');
    const coelhosContainer = document.getElementById('coelhos-container');
    let geradorCoelhos;

    function iniciarNivel(nivel) {
        coelhosContainer.innerHTML = '';
        const nivelConfig = niveis[nivel];
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

        geradorCoelhos = new GeradorCoelhos(nivelConfig.objetivos);
    }

    selecaoNivel.addEventListener('change', (event) => {
        iniciarNivel(event.target.value);
    });

    iniciarNivel('nivel1'); // Inicia com o nível 1 por padrão
});
