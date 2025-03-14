function action() {
  const questions = document.querySelectorAll('.question');

  questions.forEach((question) => {
    question.addEventListener('click', () => {
      const answeres = question.nextElementSibling; // Get the corresponding answer div
      answeres.classList.toggle('active');

      // Toggle plus/minus icon
      const icon = question.querySelector('i');
      icon.classList.toggle('fa-plus');
      icon.classList.toggle('fa-minus');
    });
  });
}
action();

// ==============sideber================
function sideber() {
  const sideberBtn = document.querySelector('#sidebarOpen');
  const navClose = document.querySelector('#navClose');
  const sideber = document.querySelector('.sidber-nav');

  sideberBtn.addEventListener('click', () => {
    sideber.style.right = '0';
  });
  navClose.addEventListener('click', () => {
    sideber.style.right = '-105%';
  });
}
sideber();

// ================ loader =================
function webLoader() {
  const loader = document.querySelector('.loader-content');
  const mainDiv = document.querySelector('#main');
  setTimeout(() => {
    loader.style.display = 'none';
    mainDiv.style.display = 'block';
  }, 5000);
}
webLoader();
