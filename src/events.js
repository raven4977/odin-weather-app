import render from './render';

export default function events() {
  const search = () => {
    const searchButton = document.querySelector('.searchbar-submit-btn');
    const searchInput = document.getElementById('header__searchbar');
    const form = document.querySelector('.search-form');
    searchButton.addEventListener('click', (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const location = document.getElementById('header__searchbar').value;
      const tempButton = document.querySelector('.btn--active');
      const unit = tempButton.innerText === 'F' ? 'us' : 'metric';
      render(location, unit);
      searchInput.value = '';
    });
  };
  const toggleTemp = () => {
    const tempButton = document.querySelectorAll('.temp-btn');
    tempButton.forEach((button) => {
      button.addEventListener('click', () => {
        tempButton.forEach((btn) => btn.classList.remove('btn--active'));
        button.classList.add('btn--active');
      });
    });
  };
  return { search, toggleTemp };
}
