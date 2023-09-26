'use strict';

//classes, useful to manipulate multiple css styles and ADD/REMOVE in 1 line of .js code
//use function in multiple event listeners, create seperate function to pass as argument in listeners

const modal = document.querySelector('.modal'); //select element and store in var
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); //display similar to array

const openModal = function () {
  modal.classList.remove('hidden'); //read classes and use remove method
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal); //no block required '{ eg code }' on single line 'for loop'

btnCloseModal.addEventListener('click', closeModal); //closeModal() <-would be read first
overlay.addEventListener('click', closeModal);

//--------------------
//e = event
document.addEventListener('keydown', function (e) {
  console.log(e.key); //generates object in .js, key can be accessed from the object property list

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
}); //global event listener //keypress is multiple x fired
