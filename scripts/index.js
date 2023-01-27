const popup = document.querySelector ('.popup');
const buttonEditOpen = document.querySelector ('.profile__button_active_edit');
const buttonClose = document.querySelector ('.popup__button_action_close');
const profileName = document.querySelector ('.profile__name');
const profileDescription = document.querySelector ('.profile__text');
const editForm = document.querySelector ('.popup__container');
let nameInput = editForm.querySelector ('.popup__input_active_name');
let descriptionInput =  editForm.querySelector ('.popup__input_active_description');

function openPopup () {
  popup.classList.add ('popup__open');
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
}

function closePopup ()  {
popup.classList.remove ('popup__open');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = `${nameInput.value}`;
    profileDescription.textContent = `${descriptionInput.value}`;
    closePopup ();
}

buttonEditOpen.addEventListener ('click', openPopup);
buttonClose.addEventListener ('click', closePopup);
editForm.addEventListener('submit', formSubmitHandler);
