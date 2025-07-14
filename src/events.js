import render from './render';

export default function events() {
  const search = () => {
    const searchButton = document.querySelector('.searchbar-submit-btn');
    const form = document.querySelector('.search-form');
    searchButton.addEventListener('click', (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const location = document.getElementById('header__searchbar').value;
      render(location);
    });
  };
  return { search };
}
