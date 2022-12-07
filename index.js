//Popup de editor de perfil
const profileButton = document.querySelector('.profile__button');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');

const namedInput = document.querySelector('#named');
const jobInput = document.querySelector('#job');

const modalTitle = document.querySelector('.modal-title');
const modalSubtitle = document.querySelector('.modal-subtitle');


function openPopup () {
  profileButton.addEventListener('click', ()=>{  
    popup.classList.add('popup__opened');
  })
  
  popupClose.addEventListener('click', ()=>{  
    popup.classList.remove('popup__opened');
  })
  
  popup.addEventListener('submit', (e)=>{
    e.preventDefault();
    modalTitle.textContent = namedInput.value;
    modalSubtitle.textContent = jobInput.value;  
    popup.classList.remove('popup__opened');
  })
}

openPopup();

/*Boton agregar cards

const profileAdd = document.querySelector('.profile__add');
const popupCards = document.querySelector('.popupCards');
const popupCardsClose = document.querySelector('.popupCards__close');
const elements = document.querySelector('.elements');

const namedCardsInput = document.querySelector('#namedCards');
const imageCardsInput = document.querySelector('#imageCards');

profileAdd.addEventListener('click', ()=> {
  popupCards.classList.add('popupCards__opened')

  popupClose.addEventListener('click', ()=>{  
    popupCards.classList.remove('popupCards__opened');
  })

  popupCards.addEventListener('subnit', (e)=> {
    modalTitle.textContent = namedCardsInput.value;
    modalSubtitle.textContent = imageCardsInput.value;
    popupCards.classList.remove('popupCards__opened');
  })
});*/

const profileAdd = document.querySelector('.profile__add');
const elementsContainer = document.querySelector('.elements');
const popupNewCard = document.querySelector('.popup_new-card');
const macroContent = document.querySelector('.macro__content');
const macroImage = document.querySelector('.macro__image');
const templateCard = document.querySelector('.template__card').content.querySelector('.elements__rectangle');
//const elementsRectangle = document.querySelector('.elements__rectangle').content.querySelector('.card');

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

initialCards.forEach(function (e) {
  //generar la tarjeta
  const newCard = templateCard.cloneNode(true);

  //llenar la informacion de la tarjeta
  newCard.querySelector('.elements__image').src = e.link;
  newCard.querySelector('.elements__group-subtitle').textContent = e.name;

  //agregar a la caja
  elementsContainer.prepend(newCard);
});

const handleClick = function (event) {
  
  if (event.target.tagName === 'IMG') {
    console.log('clic a la imagen');

    macroContent.querySelector('.macro__content img').src = event.target.src;    
    macroContent.classList.add('active');
  }
};

elementsContainer.addEventListener('click', handleClick);

const macroClose = document.querySelector('.macro__close');


/*const handleKeyPress = function (event) {
  if(event.key === '-') {     
    macroContent.classList.remove('active');
  }
};

document.addEventListener('keypress', handleKeyPress);*/

/*document.querySelectorAll('.elements').forEach(el => {
  el.addEventListener('click', function (ev) {
    this.classList.remove('active');
  })
});*/
