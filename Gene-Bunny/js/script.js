document.addEventListener('DOMContentLoaded', () => {
    const selectButton = document.getElementById('select-button');
    const bunnies = document.querySelectorAll('.bunny');
    const stageCompleted = document.getElementById('stage-completed');
    let selectedBunnies = [];

    function selectBunny(event) {
        const bunny = event.target.closest('.bunny-container');
        if (selectedBunnies.length < 2 && !selectedBunnies.includes(bunny)) {
            selectedBunnies.push(bunny);
            bunny.querySelector('.bunny').style.border = '2px solid red';
        }

        if (selectedBunnies.length === 2) {
            createOffspring();
        }
    }

    function createOffspring() {
        const genotype1 = selectedBunnies[0].getAttribute('data-genotype');
        const genotype2 = selectedBunnies[1].getAttribute('data-genotype');
        let offspringGenotype = getOffspringGenotype(genotype1, genotype2);

        const offspringContainer = document.createElement('div');
        offspringContainer.classList.add('bunny-container');
        offspringContainer.setAttribute('data-genotype', offspringGenotype);

        const offspringImage = document.createElement('img');
        offspringImage.src = getBunnyImage(offspringGenotype);
        offspringImage.classList.add('bunny');
        offspringImage.setAttribute('data-genotype', offspringGenotype);

        const genotypeLabel = document.createElement('span');
        genotypeLabel.classList.add('genotype-label');
        genotypeLabel.textContent = offspringGenotype;

        offspringContainer.appendChild(offspringImage);
        offspringContainer.appendChild(genotypeLabel);
        offspringContainer.addEventListener('click', selectBunny);

        document.querySelector('.bunnies').appendChild(offspringContainer);

        selectedBunnies.forEach(bunny => {
            bunny.querySelector('.bunny').style.border = 'none';
        });
        selectedBunnies = [];

        checkObjectives();
    }

    function getOffspringGenotype(genotype1, genotype2) {
        const punnettSquare = {
            'PP': { 'PP': ['PP'], 'Pp': ['PP', 'Pp'], 'pp': ['Pp'] },
            'Pp': { 'PP': ['PP', 'Pp'], 'Pp': ['PP', 'Pp', 'Pp', 'pp'], 'pp': ['Pp', 'pp'] },
            'pp': { 'PP': ['Pp'], 'Pp': ['Pp', 'pp'], 'pp': ['pp'] }
        };

        const possibilities = punnettSquare[genotype1][genotype2];
        const randomIndex = Math.floor(Math.random() * possibilities.length);
        return possibilities[randomIndex];
    }

    function getBunnyImage(genotype) {
        if (genotype === 'PP') {
            return '/Gene-Bunny/assets/img/bunny1.png'; // Substitua pelo caminho da imagem do coelho preto
        } else if (genotype === 'Pp') {
            return '/Gene-Bunny/assets/img/bunny2.png'; // Substitua pelo caminho da imagem do coelho cinza
        } else if (genotype === 'pp') {
            return '/Gene-Bunny/assets/img/bunny3.png'; // Substitua pelo caminho da imagem do coelho branco
        }
    }

    function checkObjectives() {
        const counts = {
            'PP': 0,
            'Pp': 0,
            'pp': 0
        };

        document.querySelectorAll('.bunny').forEach(bunny => {
            const genotype = bunny.getAttribute('data-genotype');
            counts[genotype]++;
        });

        if (counts['PP'] >= 2 && counts['Pp'] >= 3 && counts['pp'] >= 2) {
            stageCompleted.classList.remove('hidden');
        }
    }

    selectButton.addEventListener('click', () => {
        bunnies.forEach(bunny => {
            bunny.parentNode.addEventListener('click', selectBunny);
        });
    });
});
