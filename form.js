let profileButton = document.querySelector('.profile__button');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
let popupSave = document.querySelector('.popup__save');

let namedInput = document.querySelector('#named');
let jobInput = document.querySelector('#job');

let profileInfoName = document.querySelector('.profile__info_name');
let profileInfoProfession = document.querySelector('.profile__info_profession');


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
    popupClose(popup);
})