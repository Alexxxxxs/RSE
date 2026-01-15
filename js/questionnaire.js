let currentStep = 0;

document.addEventListener('DOMContentLoaded', () => renderStep());

function renderStep() {
    const stepData = steps[currentStep];
    const container = document.getElementById('step-content');
    
    // Progress Bar
    const progressPercent = ((currentStep + 1) / steps.length) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercent}%`;

    let html = `<h3 class="text-2xl font-bold text-mdc-dark mb-8">${stepData.title}</h3>`;
    html += `<div class="space-y-6 animate-fade-in">`;

    stepData.questions.forEach(q => {
        html += `<div><p class="font-semibold text-gray-800 mb-3">${q.text}</p>`;
        
        if (q.type === 'select') {
            html += `<select id="${q.id}" class="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-mdc-blue focus:ring-2 focus:ring-mdc-blue/20">
                <option value="">-- Sélectionner --</option>
                ${q.options.map(o => `<option value="${o}">${o}</option>`).join('')}
            </select>`;
        } 
        else if (q.type === 'radio_score') {
            html += `<div class="grid grid-cols-2 md:grid-cols-4 gap-2">
                ${['Oui', 'Non', 'En cours', 'Ne sait pas'].map(opt => `
                    <div>
                        <input type="radio" id="${q.id}_${opt}" name="${q.id}" value="${opt}" class="hidden custom-radio">
                        <label for="${q.id}_${opt}" class="block w-full text-center py-2 px-2 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50 text-sm font-medium transition">${opt}</label>
                    </div>
                `).join('')}
            </div>`;
        } 
        else if (q.type === 'rating') {
            html += `<div class="grid grid-cols-4 gap-2 bg-gray-50 p-3 rounded-lg">
                ${['Faible', 'Moyenne', 'Bonne', 'Très bonne'].map((r, i) => `
                    <div>
                        <input type="radio" name="${q.id}" id="${q.id}_${i}" value="${r}" class="hidden custom-radio">
                        <label for="${q.id}_${i}" class="block text-center py-2 text-xs font-bold border border-transparent rounded cursor-pointer hover:bg-white text-gray-600 transition">${r}</label>
                    </div>
                `).join('')}
            </div>`;
        }
        else if (q.type === 'radio') {
            html += `<div class="grid grid-cols-2 gap-3">
                ${q.options.map(opt => `
                    <div>
                        <input type="radio" id="${q.id}_${opt}" name="${q.id}" value="${opt}" class="hidden custom-radio">
                        <label for="${q.id}_${opt}" class="block w-full text-center py-2 px-2 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 text-sm font-medium transition">${opt}</label>
                    </div>
                `).join('')}
            </div>`;
        }
        
        html += `</div>`;
    });
    html += `</div>`;
    container.innerHTML = html;

    // Boutons
    document.getElementById('prev-btn').classList.toggle('hidden', currentStep === 0);
    const nextBtn = document.getElementById('next-btn');
    if (currentStep === steps.length - 1) {
        nextBtn.innerHTML = "Voir mon Résultat";
        nextBtn.classList.remove('bg-mdc-blue', 'hover:bg-sky-600');
        nextBtn.classList.add('bg-mdc-pink', 'hover:bg-pink-600');
    } else {
        nextBtn.innerHTML = "Suivant";
        nextBtn.classList.remove('bg-mdc-pink', 'hover:bg-pink-600');
        nextBtn.classList.add('bg-mdc-blue', 'hover:bg-sky-600');
    }
}

function changeStep(direction) {
    if (direction === 1 && currentStep === steps.length - 1) {
        showResults();
    } else if (direction === 1 || currentStep > 0) {
        currentStep += direction;
        if (currentStep >= 0 && currentStep < steps.length) {
            renderStep();
            window.scrollTo(0, 0);
        }
    }
}

function showResults() {
    document.getElementById('rse-form').classList.add('hidden');
    document.getElementById('progress-container').classList.add('hidden');
    
    const resultScreen = document.getElementById('result-screen');
    resultScreen.classList.remove('hidden');
    resultScreen.classList.add('slide-in');

    // Génération des Solutions Dynamiques
    const solutionsContainer = document.getElementById('solutions-container');
    let solutionsHTML = '';
    
    for (const [category, items] of Object.entries(solutionsData)) {
        solutionsHTML += `
            <div class="bg-white p-6 rounded-xl shadow-sm solution-card border border-gray-100">
                <h4 class="font-bold text-mdc-dark mb-4 uppercase text-sm tracking-wide">${category}</h4>
                <ul class="space-y-3">
                    ${items.map(item => `
                        <li class="text-sm text-gray-700 flex items-start leading-relaxed">
                            <svg class="w-4 h-4 text-mdc-pink mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span>${item}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }
    solutionsContainer.innerHTML = solutionsHTML;
}
