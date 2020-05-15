'use strict';



import togglePopUp from './modules/togglePopUp';
import sendForm from './modules/sendForm';
import validationForm from './modules/validationForm';


togglePopUp(document.querySelectorAll('.call-btn'),
            document.querySelector('.popup-call'));

togglePopUp(document.querySelectorAll('.discount-btn'),
            document.querySelector('.popup-discount'),
            document.querySelector('.sentence'));

sendForm();
validationForm();

