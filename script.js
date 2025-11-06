function calculateOneRepMax(weight, reps) {
  // Using the Epley formula
  return Math.round(weight * (1 + reps / 30));
}

const form = document.getElementById('benchpress-form');
const result = document.getElementById('result');

if (form) { // check if form exists to avoid errors in test environment
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const weight = e.target.weight.value;
      const reps = e.target.reps.value;

      if (weight && reps) {
        const oneRepMax = calculateOneRepMax(weight, reps);
        result.textContent = `Your estimated 1RM is ${oneRepMax} lbs.`;
      }
    });
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = calculateOneRepMax;
}
