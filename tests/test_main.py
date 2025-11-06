import subprocess
import sys

def test_main_output():
    """Tests that the main script prints 'Hello, world!'."""
    process = subprocess.run(
        [sys.executable, "src/main.py"],
        capture_output=True,
        text=True,
        check=True,
    )
    assert process.stdout == "Hello, world!\n"
