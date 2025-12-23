import os
import shutil

def remove_empty_dirs(directory):
    """
    Removes empty subdirectories in a given directory.
    """
    for dirpath, dirnames, filenames in os.walk(directory, topdown=False):
        if not dirnames and not filenames:
            os.rmdir(dirpath)
