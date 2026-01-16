const changeTextBtn = document.getElementById('change-text-btn');
const aboutText = document.getElementById('about-text');

let isTextChanged = false;

changeTextBtn.addEventListener('click', () => {
  if (isTextChanged) {
    aboutText.textContent = 'This is a paragraph about me.';
  } else {
    aboutText.textContent = 'I am a passionate web developer.';
  }
  isTextChanged = !isTextChanged;
});
