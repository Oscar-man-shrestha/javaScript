'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);




// Function to add in addEventListener.
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}; 

// Function to add in addEventListener.
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Loop through all "show modal" buttons and add click event
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// Add click event to close button
btnsCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);


//Starting keyboard addEventListener

document.addEventListener('keydown', function(e) {
  console.log(e.key);

  if(e.key=='Escape' && ! modal.classList.contains('hidden'))
    //If the card is open
 
      closeModal();

});
