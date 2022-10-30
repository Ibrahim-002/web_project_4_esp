const profileButton = document.querySelector('.profile__button');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const popupSave = document.querySelector('.popup__save');

const namedInput = document.querySelector('#named');
const jobInput = document.querySelector('#job');

const profileInfoName = document.querySelector('.profile__info-name');
const profileInfoProfession = document.querySelector('.profile__info-profession');


profileButton.addEventListener('click', (e)=>{
  e.preventDefault();
  popup.classList.add('popup__opened');
})

popupClose.addEventListener('click', (e)=>{
  e.preventDefault();
  popup.classList.remove('popup__opened');
})

popup.addEventListener('submit', (e)=>{
  e.preventDefault();
  profileInfoName.textContent = namedInput.value;
  profileInfoProfession.textContent = jobInput.value;  
  popup.classList.remove('popup__opened');
})
