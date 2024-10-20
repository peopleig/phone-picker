import { mobilePhones } from './database.js';
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('phone-preferences-form');
    const minBudgetInput = document.getElementById('min-budget');
    const maxBudgetInput = document.getElementById('max-budget');
    const phoneResults = document.getElementById('phone-results');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const minBudget = parseInt(minBudgetInput.value);
        const maxBudget = parseInt(maxBudgetInput.value);
        
        const priorities = [
            {name: 'Gaming', rank: parseInt(form['priority-gaming'].value)},
            {name: 'Photography', rank: parseInt(form['priority-photography'].value)},
            {name: 'Browsing', rank: parseInt(form['priority-browsing'].value)},
            {name: 'Storage', rank: parseInt(form['priority-storage'].value)}
        ];
        // Sort priorities by rank
        priorities.sort((a, b) => a.rank - b.rank);

        // Validate budget range
        if (minBudget > maxBudget) {
            alert('Minimum budget cannot be greater than maximum budget');
            return;
        }

        // Validate priority rankings
        const ranks = priorities.map(p => p.rank);
        if (new Set(ranks).size !== ranks.length) {
            alert('Please use each ranking (1-4) only once');
            return;
        }

         displayResults(minBudget, maxBudget, priorities);
    });

    function displayResults(minBudget, maxBudget, priorities) {
        phoneResults.innerHTML = `
            <div class="result-summary">
                <h3>Based on your preferences:</h3>
                <p>Budget Range: ₹${minBudget.toLocaleString('en-IN')} - ₹${maxBudget.toLocaleString('en-IN')}</p>
                <p>Priorities (in order of importance):</p>
                <ol>
                    ${ priorities.map(p => `<li>${p.name}</li>`).join('')}
                </ol>
                <p>Here are some phone recommendations (to be implemented):</p>
            </div>
            <div class="phone-recommendations">
            ${JSON.stringify(mobilePhones[0],null,2)}
            </div>
        `;
        
        
        // Here you would add logic to display actual phone recommendations
    }
});