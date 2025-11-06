import unittest
import sys
sys.path.append('src')
from main import brzycki_formula

class TestBenchPressPredictor(unittest.TestCase):

    def test_brzycki_formula(self):
        self.assertAlmostEqual(brzycki_formula(100, 10), 133.33333333333334)
        self.assertAlmostEqual(brzycki_formula(225, 5), 253.125)

if __name__ == "__main__":
    unittest.main()
