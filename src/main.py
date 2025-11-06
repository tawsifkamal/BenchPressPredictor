def brzycki_formula(weight, reps):
  """
  Calculates the one-rep max (1RM) using the Brzycki formula.

  Args:
    weight: The weight lifted.
    reps: The number of repetitions performed.

  Returns:
    The estimated one-rep max.
  """
  return weight / (1.0278 - 0.0278 * reps)
