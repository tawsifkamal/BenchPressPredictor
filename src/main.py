def brzycki_formula(weight, reps):
    return weight * (36 / (37 - reps))

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--weight", type=int, required=True)
    parser.add_argument("--reps", type=int, required=True)
    args = parser.parse_args()
    one_rep_max = brzycki_formula(args.weight, args.reps)
    print(f"Your one-rep max is: {one_rep_max}")
