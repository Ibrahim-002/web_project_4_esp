
/*-----Popup de editor de perfil-----*/

const profileButton = document.querySelector('.profile__button');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');

const fieldAInput = document.querySelector('#fieldA');
const fieldBInput = document.querySelector('#fieldB');

const modalTitle = document.querySelector('.modal-title');
const modalSubtitle = document.querySelector('.modal-subtitle');


document.getElementById('fieldA').value = 'Jacques Cousteau';
document.getElementById('fieldB').value = 'Explorador';

function openPopup () {
  profileButton.addEventListener('click', ()=>{  
    popup.classList.add('popup__opened');
  })
  
  popupClose.addEventListener('click', (a)=>{
    a.preventDefault();
    popup.classList.remove('popup__opened');
  })  
}

popup.addEventListener('submit', (e)=>{
    e.preventDefault();

    modalTitle.textContent = fieldAInput.value;
    modalSubtitle.textContent = fieldBInput.value;  
    popup.classList.remove('popup__opened');    
  })

openPopup();

//Section elements y ampliar imagenes

const elementsBox = document.querySelector('.elements');
const macroContent = document.querySelector('.macro__content');
const macroImage = document.querySelector('.macro__image');
const templateCard = document.querySelector('.template-card').content.querySelector('.elements__rectangle');


//Lugar para inicializar los cambios del ussuario
const initialCards = [
  {
    subtitle: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    subtitle: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    subtitle: "Montañas Calvas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    subtitle: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    subtitle: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    subtitle: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];



initialCards.forEach(function (e) {
  //generar la tarjeta  
  let newCard = templateCard.cloneNode(true); 
  
  //llenar la informacion de la tarjeta
  newCard.querySelector('.elements__image').src = e.link;
  newCard.querySelector('.elements__group-subtitle').textContent = e.subtitle;

  //agregar a la caja
  elementsBox.prepend(newCard);

  
});

//Funcion para ampliar las imagenes
const handleClick = function (event) {
  
  if (event.target.classList.contains('elements__image')) {
    macroContent.querySelector('.macro__content img').src = event.target.src;
    macroContent.classList.add('active');
  }
  if (event.target.classList.contains('elements__trash')) {
    event.target.parentNode.remove();
  }
};

elementsBox.addEventListener('click', handleClick);

const macroClose = document.querySelector('.macro__close');

macroClose.addEventListener('click', ()=>{  
  macroContent.classList.remove('active');
  macroContent.querySelector('.macro__content img').src = '';
});



//Abrir el poopup de Cards

const profileAdd = document.querySelector('.profile__add');
const popupCloseCards = document.querySelector('.popup__close-cards');
const popupCards = document.querySelector('.popup-cards');

profileAdd.addEventListener('click', ()=>{
  popupCards.classList.add('popup__opened');
});

popupCloseCards.addEventListener('click', (ev)=>{
  ev.preventDefault();
  popupCards.classList.remove('popup__opened');
}) 

popupCards.addEventListener('submit', (ev)=> {
  ev.preventDefault();

  const modalText = document.querySelector('.modal-text').value;
  const modalUrl = document.querySelector('.modal-url').value;
  let addCards = templateCard.cloneNode(true);

  addCards.querySelector('.elements__image').src = modalUrl;
  addCards.querySelector('.elements__group-subtitle').textContent = modalText;   

  elementsBox.prepend(addCards);
  document.querySelector('.modal-text').value = '';
  document.querySelector('.modal-url').value = '';
  popupCards.classList.remove('popup__opened');

  addHeart();
});

/*Botón de like*/

function addHeart () {

  const heartLike = document.querySelectorAll('.elements__group-vector');

  heartLike.forEach(like => {
    like.addEventListener('click', function(){
      like.classList.add('active-vector');    
    });
});
}

addHeart();
