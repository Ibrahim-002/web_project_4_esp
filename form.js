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

popup.addEventListener('click', (e)=>{
    e.preventDefault();
    profileInfoName.textContent = namedInput.value;
    profileInfoProfession.textContent = jobInput.value;
})

let elements = document.querySelector('.elements');
let buttonLike = elements.querySelector('.elements__group_vector');

function activeButton(){
    if(buttonLike.classList.contains('elements__group_vector')){
        buttonLike.classList.remove('elements__group_vector');
        buttonLike.classList.add('elements__group_vector-active');
    } else{
        buttonLike.classList.remove('elements__group_vector-active');
        buttonLike.classList.add('elements__group_vector');
    }
}

buttonLike.addEventListener('click', (e)=>{
    e.preventDefault();
    activeButton();
})