const form = document.getElementById('predictor-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const reps = parseInt(document.getElementById('reps').value);

    if (isNaN(weight) || isNaN(reps) || weight <= 0 || reps <= 0) {
        resultDiv.textContent = 'Please enter valid weight and reps.';
        return;
    }

    // Epley formula for 1RM prediction
    const oneRepMax = weight * (1 + reps / 30);

    resultDiv.textContent = `Your estimated 1-Rep Max is: ${oneRepMax.toFixed(2)} lbs`;
});
