import os
import unittest
import shutil
from cleanup import remove_empty_dirs

class TestCleanup(unittest.TestCase):
    def setUp(self):
        """Set up a temporary directory structure for testing."""
        self.test_dir = 'test_dir'
        os.makedirs(os.path.join(self.test_dir, 'empty_dir_1'))
        os.makedirs(os.path.join(self.test_dir, 'empty_dir_2'))
        os.makedirs(os.path.join(self.test_dir, 'non_empty_dir', 'sub_dir'))
        with open(os.path.join(self.test_dir, 'non_empty_dir', 'file.txt'), 'w') as f:
            f.write('hello')

    def tearDown(self):
        """Remove the temporary directory structure."""
        shutil.rmtree(self.test_dir)

    def test_remove_empty_dirs(self):
        """Test that empty directories are removed and non-empty ones are not."""
        remove_empty_dirs(self.test_dir)
        self.assertFalse(os.path.exists(os.path.join(self.test_dir, 'empty_dir_1')))
        self.assertFalse(os.path.exists(os.path.join(self.test_dir, 'empty_dir_2')))
        self.assertTrue(os.path.exists(os.path.join(self.test_dir, 'non_empty_dir')))
        self.assertTrue(os.path.exists(os.path.join(self.test_dir, 'non_empty_dir', 'file.txt')))
        self.assertFalse(os.path.exists(os.path.join(self.test_dir, 'non_empty_dir', 'sub_dir')))

if __name__ == '__main__':
    unittest.main()
