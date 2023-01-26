const popup = document.querySelector ('.popup');
const buttonEditOpen = document.querySelector ('.profile__button_edit-active');
const buttonClose = document.querySelector ('.popup__button_action_close');
const getprofileName = document.querySelector ('.profile__name');
const getprofileDescription = document.querySelector ('.profile__text');
const editForm = document.querySelector ('.popup__container');
let nameInput = editForm.querySelector ('.popup__input_name-active');
let descriptionInput =  editForm.querySelector ('.popup__input_description-active');

function openPopup () {
  popup.classList.add ('popup__open');
  nameInput.value = getprofileName.textContent;
  descriptionInput.value = getprofileDescription.textContent;
}

function closePopup ()  {
popup.classList.remove ('popup__open');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    getprofileName.textContent = `${nameInput.value}`;
    getprofileDescription.textContent = `${descriptionInput.value}`;
    closePopup ();
}

buttonEditOpen.addEventListener ('click', openPopup);
buttonClose.addEventListener ('click', closePopup);
editForm.addEventListener('submit', formSubmitHandler);
