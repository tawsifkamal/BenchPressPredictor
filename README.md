# BenchPressPredictor

This project predicts your one-rep max (1RM) for the bench press using the Brzycki formula.

## Usage

To use the predictor, call the `brzycki_formula` function in `src/main.py` with the weight you lifted and the number of repetitions you performed.

```python
from src.main import brzycki_formula

weight = 225
reps = 5

one_rep_max = brzycki_formula(weight, reps)

print(f"Your estimated one-rep max is: {one_rep_max:.2f} lbs")
```
