import unittest
from tinygen.generator import generate_text

class TestGenerator(unittest.TestCase):
    def test_generate_text(self):
        text = generate_text()
        self.assertEqual(text, "This is a tiny generated text.")

if __name__ == '__main__':
    unittest.main()
