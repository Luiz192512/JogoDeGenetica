export default class Coelho {
    constructor(elemento) {
        this.elemento = elemento;
        this.genotipo = elemento.getAttribute('data-genotipo');
    }
}
