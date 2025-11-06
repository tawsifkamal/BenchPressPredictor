import argparse

def brzycki_formula(weight, reps):
  """
  Calculates the one-rep max using the Brzycki formula.
  """
  return weight / (1.0278 - (0.0278 * reps))

if __name__ == "__main__":
  parser = argparse.ArgumentParser(description="Calculate your one-rep max using the Brzycki formula.")
  parser.add_argument("-w", "--weight", type=float, required=True, help="The weight you lifted.")
  parser.add_argument("-r", "--reps", type=int, required=True, help="The number of repetitions you performed.")
  args = parser.parse_args()

  one_rep_max = brzycki_formula(args.weight, args.reps)
  print(f"Your estimated one-rep max is: {one_rep_max:.2f}")
