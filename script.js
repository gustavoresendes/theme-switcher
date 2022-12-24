const toggleSwitch = document.querySelector(".toggle-input");

toggleSwitch.addEventListener('change', () => {
  document.body.classList.toggle("dark");
});
