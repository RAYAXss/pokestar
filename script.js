// Type effectiveness data based on Gen VI+ (Bulbapedia)
const TYPES = [
    'Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice',
    'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug',
    'Rock', 'Ghost', 'Dragon', 'Dark', 'Steel', 'Fairy'
];

// Type chart: attacker -> defender effectiveness (1, 0.5, 0, 2)
const TYPE_CHART = {
    Normal: {
        Normal: 1, Fire: 1, Water: 1, Electric: 1, Grass: 1, Ice: 1,
        Fighting: 1, Poison: 1, Ground: 1, Flying: 1, Psychic: 1, Bug: 1,
        Rock: 0.5, Ghost: 0, Dragon: 1, Dark: 1, Steel: 0.5, Fairy: 1
    },
    Fire: {
        Normal: 1, Fire: 0.5, Water: 0.5, Electric: 1, Grass: 2, Ice: 2,
        Fighting: 1, Poison: 1, Ground: 1, Flying: 1, Psychic: 1, Bug: 2,
        Rock: 0.5, Ghost: 1, Dragon: 0.5, Dark: 1, Steel: 2, Fairy: 1
    },
    Water: {
        Normal: 1, Fire: 2, Water: 0.5, Electric: 1, Grass: 0.5, Ice: 1,
        Fighting: 1, Poison: 1, Ground: 2, Flying: 1, Psychic: 1, Bug: 1,
        Rock: 2, Ghost: 1, Dragon: 0.5, Dark: 1, Steel: 1, Fairy: 1
    },
    Electric: {
        Normal: 1, Fire: 1, Water: 2, Electric: 0.5, Grass: 0.5, Ice: 1,
        Fighting: 1, Poison: 1, Ground: 0, Flying: 2, Psychic: 1, Bug: 1,
        Rock: 1, Ghost: 1, Dragon: 0.5, Dark: 1, Steel: 1, Fairy: 1
    },
    Grass: {
        Normal: 1, Fire: 0.5, Water: 2, Electric: 1, Grass: 0.5, Ice: 1,
        Fighting: 1, Poison: 0.5, Ground: 2, Flying: 0.5, Psychic: 1, Bug: 0.5,
        Rock: 2, Ghost: 1, Dragon: 0.5, Dark: 1, Steel: 0.5, Fairy: 1
    },
    Ice: {
        Normal: 1, Fire: 0.5, Water: 0.5, Electric: 1, Grass: 2, Ice: 0.5,
        Fighting: 1, Poison: 1, Ground: 2, Flying: 2, Psychic: 1, Bug: 1,
        Rock: 1, Ghost: 1, Dragon: 2, Dark: 1, Steel: 0.5, Fairy: 1
    },
    Fighting: {
        Normal: 2, Fire: 1, Water: 1, Electric: 1, Grass: 1, Ice: 2,
        Fighting: 1, Poison: 0.5, Ground: 1, Flying: 0.5, Psychic: 0.5, Bug: 0.5,
        Rock: 2, Ghost: 0, Dragon: 1, Dark: 2, Steel: 2, Fairy: 0.5
    },
    Poison: {
        Normal: 1, Fire: 1, Water: 1, Electric: 1, Grass: 2, Ice: 1,
        Fighting: 1, Poison: 0.5, Ground: 0.5, Flying: 1, Psychic: 1, Bug: 1,
        Rock: 0.5, Ghost: 0.5, Dragon: 1, Dark: 1, Steel: 0, Fairy: 2
    },
    Ground: {
        Normal: 1, Fire: 2, Water: 1, Electric: 2, Grass: 0.5, Ice: 1,
        Fighting: 1, Poison: 2, Ground: 1, Flying: 0, Psychic: 1, Bug: 0.5,
        Rock: 2, Ghost: 1, Dragon: 1, Dark: 1, Steel: 2, Fairy: 1
    },
    Flying: {
        Normal: 1, Fire: 1, Water: 1, Electric: 0.5, Grass: 2, Ice: 1,
        Fighting: 2, Poison: 1, Ground: 1, Flying: 1, Psychic: 1, Bug: 2,
        Rock: 0.5, Ghost: 1, Dragon: 1, Dark: 1, Steel: 0.5, Fairy: 1
    },
    Psychic: {
        Normal: 1, Fire: 1, Water: 1, Electric: 1, Grass: 1, Ice: 1,
        Fighting: 2, Poison: 2, Ground: 1, Flying: 1, Psychic: 0.5, Bug: 1,
        Rock: 1, Ghost: 1, Dragon: 1, Dark: 0, Steel: 0.5, Fairy: 1
    },
    Bug: {
        Normal: 1, Fire: 0.5, Water: 1, Electric: 1, Grass: 2, Ice: 1,
        Fighting: 0.5, Poison: 0.5, Ground: 1, Flying: 0.5, Psychic: 2, Bug: 1,
        Rock: 1, Ghost: 0.5, Dragon: 1, Dark: 2, Steel: 0.5, Fairy: 0.5
    },
    Rock: {
        Normal: 1, Fire: 2, Water: 1, Electric: 1, Grass: 1, Ice: 2,
        Fighting: 0.5, Poison: 1, Ground: 0.5, Flying: 2, Psychic: 1, Bug: 2,
        Rock: 1, Ghost: 1, Dragon: 1, Dark: 1, Steel: 0.5, Fairy: 1
    },
    Ghost: {
        Normal: 0, Fire: 1, Water: 1, Electric: 1, Grass: 1, Ice: 1,
        Fighting: 1, Poison: 1, Ground: 1, Flying: 1, Psychic: 2, Bug: 1,
        Rock: 1, Ghost: 2, Dragon: 1, Dark: 0.5, Steel: 1, Fairy: 1
    },
    Dragon: {
        Normal: 1, Fire: 1, Water: 1, Electric: 1, Grass: 1, Ice: 1,
        Fighting: 1, Poison: 1, Ground: 1, Flying: 1, Psychic: 1, Bug: 1,
        Rock: 1, Ghost: 1, Dragon: 2, Dark: 1, Steel: 0.5, Fairy: 0
    },
    Dark: {
        Normal: 1, Fire: 1, Water: 1, Electric: 1, Grass: 1, Ice: 1,
        Fighting: 0.5, Poison: 1, Ground: 1, Flying: 1, Psychic: 2, Bug: 1,
        Rock: 1, Ghost: 2, Dragon: 1, Dark: 0.5, Steel: 1, Fairy: 0.5
    },
    Steel: {
        Normal: 1, Fire: 0.5, Water: 0.5, Electric: 0.5, Grass: 1, Ice: 2,
        Fighting: 1, Poison: 1, Ground: 1, Flying: 1, Psychic: 1, Bug: 1,
        Rock: 2, Ghost: 1, Dragon: 1, Dark: 1, Steel: 0.5, Fairy: 2
    },
    Fairy: {
        Normal: 1, Fire: 0.5, Water: 1, Electric: 1, Grass: 1, Ice: 1,
        Fighting: 2, Poison: 0.5, Ground: 1, Flying: 1, Psychic: 1, Bug: 1,
        Rock: 1, Ghost: 1, Dragon: 2, Dark: 2, Steel: 0.5, Fairy: 1
    }
};

const typeButtonsContainer = document.getElementById('typeButtons');
const typeDetails = document.getElementById('typeDetails');
const selectedTypeName = document.getElementById('selectedTypeName');
const superEffectiveEl = document.getElementById('superEffective');
const notVeryEffectiveEl = document.getElementById('notVeryEffective');
const immuneEl = document.getElementById('immune');
const weakToEl = document.getElementById('weakTo');
const resistsEl = document.getElementById('resists');
const immuneToEl = document.getElementById('immuneTo');
const toggleChartBtn = document.getElementById('toggleChart');
const typeChartContainer = document.getElementById('typeChart');
const chartTable = document.getElementById('chartTable');

function getTypeClass(type) {
    return `type-${type.toLowerCase()}`;
}

function createTypePill(type) {
    const pill = document.createElement('span');
    pill.className = `type-pill ${getTypeClass(type)}`;
    pill.textContent = type;
    return pill;
}

function analyzeType(type) {
    const chart = TYPE_CHART[type];
    const superEffective = [];
    const notVeryEffective = [];
    const immune = [];
    const weakTo = [];
    const resists = [];
    const immuneTo = [];

    // Attacking analysis (this type attacks others)
    for (const defender of TYPES) {
        const eff = chart[defender];
        if (eff === 2) superEffective.push(defender);
        else if (eff === 0.5) notVeryEffective.push(defender);
        else if (eff === 0) immune.push(defender);
    }

    // Defending analysis (others attack this type)
    for (const attacker of TYPES) {
        const attChart = TYPE_CHART[attacker];
        const eff = attChart[type];
        if (eff === 2) weakTo.push(attacker);
        else if (eff === 0.5) resists.push(attacker);
        else if (eff === 0) immuneTo.push(attacker);
    }

    return { superEffective, notVeryEffective, immune, weakTo, resists, immuneTo };
}

function renderTypeButtons(filter = '') {
    typeButtonsContainer.innerHTML = '';
    const filteredTypes = TYPES.filter(type => type.toLowerCase().includes(filter.toLowerCase()));
    
    for (const type of filteredTypes) {
        const btn = document.createElement('button');
        btn.className = `type-btn ${getTypeClass(type)}`;
        btn.textContent = type;
        btn.addEventListener('click', () => selectType(type, btn));
        typeButtonsContainer.appendChild(btn);
    }
}

let activeButton = null;

function selectType(type, btn) {
    if (activeButton) {
        activeButton.classList.remove('active');
    }
    btn.classList.add('active');
    activeButton = btn;

    selectedTypeName.textContent = type;
    const analysis = analyzeType(type);

    // Clear containers
    superEffectiveEl.innerHTML = '';
    notVeryEffectiveEl.innerHTML = '';
    immuneEl.innerHTML = '';
    weakToEl.innerHTML = '';
    resistsEl.innerHTML = '';
    immuneToEl.innerHTML = '';

    // Populate
    analysis.superEffective.forEach(t => superEffectiveEl.appendChild(createTypePill(t)));
    analysis.notVeryEffective.forEach(t => notVeryEffectiveEl.appendChild(createTypePill(t)));
    analysis.immune.forEach(t => immuneEl.appendChild(createTypePill(t)));
    analysis.weakTo.forEach(t => weakToEl.appendChild(createTypePill(t)));
    analysis.resists.forEach(t => resistsEl.appendChild(createTypePill(t)));
    analysis.immuneTo.forEach(t => immuneToEl.appendChild(createTypePill(t)));

    if (typeDetails.classList.contains('hidden')) {
        typeDetails.classList.remove('hidden');
    }
}

function renderChart() {
    chartTable.innerHTML = '';
    
    // Header
    const headerRow = document.createElement('tr');
    const emptyHeader = document.createElement('th');
    headerRow.appendChild(emptyHeader);
    for (const type of TYPES) {
        const th = document.createElement('th');
        th.textContent = type.slice(0, 3);
        th.title = type;
        th.className = getTypeClass(type);
        headerRow.appendChild(th);
    }
    chartTable.appendChild(headerRow);

    // Rows
    for (const attacker of TYPES) {
        const row = document.createElement('tr');
        const attHeader = document.createElement('th');
        attHeader.textContent = attacker.slice(0, 3);
        attHeader.title = attacker;
        attHeader.className = getTypeClass(attacker);
        row.appendChild(attHeader);

        for (const defender of TYPES) {
            const td = document.createElement('td');
            const eff = TYPE_CHART[attacker][defender];
            td.textContent = eff === 1 ? '' : eff === 2 ? 'x2' : eff === 0.5 ? 'x0.5' : 'x0';
            if (eff === 2) td.className = 'cell-super';
            else if (eff === 0.5) td.className = 'cell-notvery';
            else if (eff === 0) td.className = 'cell-immune';
            else td.className = 'cell-neutral';
            td.title = `${attacker} vs ${defender}: ${eff}x`;
            row.appendChild(td);
        }
        chartTable.appendChild(row);
    }
}

toggleChartBtn.addEventListener('click', () => {
    typeChartContainer.classList.toggle('hidden');
});

// Initialize
renderTypeButtons();
renderChart();

const typeSearch = document.getElementById('typeSearch');
typeSearch.addEventListener('input', (e) => {
    renderTypeButtons(e.target.value);
    if (e.target.value && activeButton) {
        activeButton.classList.remove('active');
        activeButton = null;
        selectedTypeName.textContent = 'Type';
        typeDetails.classList.add('hidden');
    }
});

console.log('PokeStar loaded successfully');