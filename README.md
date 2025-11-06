# BenchPressPredictor

A simple command-line tool to predict your one-rep max for the bench press using the Brzycki formula.

## Usage

To calculate your one-rep max, run the following command:

```bash
python3 src/main.py --weight <weight> --reps <reps>
```

Replace `<weight>` with the weight you lifted and `<reps>` with the number of repetitions you performed.

### Example

```bash
python3 src/main.py --weight 100 --reps 10
```

This will output:

```
Your estimated one-rep max is: 133.37
```
