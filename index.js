
/*-----Popup de editor de perfil-----*/

const profileButton = document.querySelector('.profile__button');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');

const fieldAInput = document.querySelector('#fieldA');
const fieldBInput = document.querySelector('#fieldB');

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
    modalTitle.textContent = fieldAInput.value;
    modalSubtitle.textContent = fieldBInput.value;  
    popup.classList.remove('popup__opened');
  })
}
openPopup();

/*-----Popup agregar cards-----*/

const profileAdd = document.querySelector('.profile__add');
const popupCards = document.querySelector('.popup-cards');

const popupContainer = document.querySelector('.popup__container');


function openPopupCards () {
  profileAdd.addEventListener('click', ()=>{  
    popupCards.classList.add('popup__opened');
  })
  
  popupClose.addEventListener('click', ()=>{  
    popupCards.classList.remove('popup__opened');
  })

  popupCards.addEventListener('submit', (evt)=>{
    
    evt.preventDefault();

    const modalText = document.querySelector('.modal-text').value;
    const modalUrl = document.querySelector('.modal-url').value;
  
    const newCard = templateCard.cloneNode(true);
  
    newCard.querySelector('.elements__image').src = modalUrl;
    newCard.querySelector('.elements__group-subtitle').textContent = modalText;
  
    elementsBox.prepend(newCard);
    
    popupCards.classList.remove('popup__opened');
    document.querySelector('.modal-text').value = '';
    document.querySelector('.modal-url').value = '';
  });
};

openPopupCards();

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
  
  const newCard = templateCard.cloneNode(true);

  //llenar la informacion de la tarjeta
  newCard.querySelector('.elements__image').src = e.link;
  newCard.querySelector('.elements__group-subtitle').textContent = e.subtitle;

  //agregar a la caja
  elementsBox.prepend(newCard);
});

const handleClick = function (event) {
  
  if (event.target.tagName === 'IMG') {
    console.log('clic a la imagen');

    macroContent.querySelector('.macro__content img').src = event.target.src;
    macroContent.classList.add('active');
  }
  if (event.target.tagName === 'BUTTON') {    
    event.target.parentNode.remove();
  }
};

elementsBox.addEventListener('click', handleClick);

const macroClose = document.querySelector('.macro__close');
  macroClose.addEventListener('click', ()=>{  
  macroContent.classList.remove('active');
  macroContent.querySelector('.macro__content img').src = '';
});


/*Botón de like*/

const heartLike = document.querySelectorAll('.elements__group-vector');

heartLike.forEach(function(like){
  like.addEventListener('click', function(){
    like.classList.add('active-vector');    
  });
});
