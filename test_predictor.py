import unittest
from predictor import predict_max_bench_press

class TestPredictor(unittest.TestCase):

    def test_predict_max_bench_press(self):
        # Test case 1: 100 lbs for 10 reps should be around 133.33 lbs
        self.assertAlmostEqual(predict_max_bench_press(100, 10), 133.33, places=2)

        # Test case 2: 225 lbs for 5 reps should be around 262.5 lbs
        self.assertAlmostEqual(predict_max_bench_press(225, 5), 262.5, places=2)

        # Test case 3: 135 lbs for 1 rep should be 135.0 lbs
        self.assertAlmostEqual(predict_max_bench_press(135, 1), 135.0, places=2)

    def test_invalid_input(self):
        # Test case for non-positive reps
        with self.assertRaises(ValueError):
            predict_max_bench_press(100, 0)
        with self.assertRaises(ValueError):
            predict_max_bench_press(100, -5)

if __name__ == '__main__':
    unittest.main()
