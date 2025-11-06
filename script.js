const form = document.getElementById('predictor-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const weight = e.target.weight.value;
    const reps = e.target.reps.value;

    if (weight > 0 && reps > 0) {
        // Epley formula
        const oneRepMax = weight * (1 + reps / 30);
        resultDiv.textContent = `Your estimated one-rep max is: ${oneRepMax.toFixed(2)} lbs`;
    } else {
        resultDiv.textContent = 'Please enter valid weight and reps.';
    }
});
