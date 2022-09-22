let profileButton = document.querySelector('.profile__button');
let editForm = document.querySelector('.edit-form');
let buttonClose = document.querySelector('.button-close');
let profile = document.querySelector('.profile');

profileButton.addEventListener('click', (e)=>{
    e.preventDefault();
    editForm.classList.add('open-form');
    editForm.classList.add('modal');
})

buttonClose.addEventListener('click', (e)=>{
    e.preventDefault();
    editForm.classList.remove('open-form');
})
