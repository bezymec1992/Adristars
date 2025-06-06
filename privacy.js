const btnPrivacy = document.querySelector('.privacy__btn-hide');
const privacySection = document.querySelector('.privacy');

btnPrivacy.addEventListener('click', () => {
  const isHidden = privacySection.classList.toggle('hide-menu');
  btnPrivacy.textContent = isHidden ? '+' : '-';
});
