
def predict_max_bench_press(weight, reps):
  """Predicts the 1-rep max for bench press based on weight and reps.

  Args:
    weight: The weight lifted (in pounds).
    reps: The number of repetitions.

  Returns:
    The predicted 1-rep max.
  """
  if reps <= 0:
    raise ValueError("Number of repetitions must be positive.")
  if reps == 1:
    return float(weight)
  return weight * (1 + (reps / 30))


if __name__ == "__main__":
  weight = float(input("Enter the weight you lifted (in pounds): "))
  reps = int(input("Enter the number of repetitions: "))
  max_bench_press = predict_max_bench_press(weight, reps)
  print(f"Your predicted 1-rep max for bench press is: {max_bench_press:.2f} pounds")
