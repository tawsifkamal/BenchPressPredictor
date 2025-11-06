const form = document.getElementById('predictor-form');
const result = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const weight = document.getElementById('weight').value;
    const reps = document.getElementById('reps').value;

    if (weight > 0 && reps > 0) {
        const predictedMax = Math.round(weight / (1.0278 - 0.0278 * reps));
        result.textContent = `Your predicted one-rep max is ${predictedMax} lbs.`;
    } else {
        result.textContent = 'Please enter valid numbers for weight and reps.';
    }
});
