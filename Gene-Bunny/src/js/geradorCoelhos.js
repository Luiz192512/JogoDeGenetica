import Coelho from './coelho.js';
import { obterGenotipoDescendente, obterImagemCoelho } from './genotipos.js';

export default class GeradorCoelhos {
    constructor(objetivos, coelhosContainer, botaoSelecionar, faseConcluida) {
        this.objetivos = objetivos;
        this.coelhosContainer = coelhosContainer;
        this.botaoSelecionar = botaoSelecionar;
        this.faseConcluida = faseConcluida;
        this.coelhosSelecionados = [];

        this.init();
    }

    init() {
        this.coelhosElementos = this.coelhosContainer.querySelectorAll('.coelho-container');
        this.coelhosElementos.forEach(coelhoElemento => {
            const coelho = new Coelho(coelhoElemento);
            coelho.elemento.addEventListener('click', this.selecionarCoelho.bind(this));
        });

        this.botaoSelecionar.addEventListener('click', this.habilitarSelecao.bind(this));
    }

    habilitarSelecao() {
        this.coelhosElementos.forEach(coelhoElemento => {
            coelhoElemento.addEventListener('click', this.selecionarCoelho.bind(this));
        });
    }

    selecionarCoelho(event) {
        const coelhoElemento = event.currentTarget;
        if (this.coelhosSelecionados.length < 2 && !this.coelhosSelecionados.includes(coelhoElemento)) {
            this.coelhosSelecionados.push(coelhoElemento);
            coelhoElemento.querySelector('.coelho').style.border = '2px solid red';
        }

        if (this.coelhosSelecionados.length === 2) {
            this.gerarDescendencia();
        }
    }

    gerarDescendencia() {
        const genotipo1 = this.coelhosSelecionados[0].getAttribute('data-genotipo');
        const genotipo2 = this.coelhosSelecionados[1].getAttribute('data-genotipo');
        const descendenteGenotipo = obterGenotipoDescendente(genotipo1, genotipo2);
        const imagemCoelho = obterImagemCoelho(descendenteGenotipo);

        const container = document.createElement('div');
        container.classList.add('coelho-container');
        container.setAttribute('data-genotipo', descendenteGenotipo);

        const imagem = document.createElement('img');
        imagem.src = imagemCoelho;
        imagem.classList.add('coelho');

        const etiquetaGenotipo = document.createElement('span');
        etiquetaGenotipo.classList.add('etiqueta-genotipo');
        etiquetaGenotipo.textContent = descendenteGenotipo;

        container.appendChild(imagem);
        container.appendChild(etiquetaGenotipo);
        this.coelhosContainer.appendChild(container);

        this.coelhosSelecionados = [];
        this.verificarObjetivos();
    }

    verificarObjetivos() {
        const genotiposAtuais = [...this.coelhosContainer.querySelectorAll('.coelho-container')].map(
            coelho => coelho.getAttribute('data-genotipo')
        );

        const objetivosAlcancados = this.objetivos.every(objetivo => {
            const { genotipo, quantidade } = objetivo;
            const ocorrencias = genotiposAtuais.filter(g => g === genotipo).length;
            return ocorrencias >= quantidade;
        });

        if (objetivosAlcancados) {
            this.faseConcluida.classList.remove('oculto');
        }
    }
}
