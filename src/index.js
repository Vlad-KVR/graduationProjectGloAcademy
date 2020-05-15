'use strict';



import togglePopUp from './modules/togglePopUp';
import sendForm from './modules/sendForm';
import validationForm from './modules/validationForm';
import showMoreContent from './modules/showMoreContent';


togglePopUp(document.querySelectorAll('.call-btn'),
            document.querySelector('.popup-call'));

togglePopUp(document.querySelectorAll('.discount-btn'),
            document.querySelector('.popup-discount'),
            document.querySelector('.sentence'));

togglePopUp(document.querySelector('.consultation-btn'),
            document.querySelector('.popup-consultation'));

togglePopUp(document.querySelector('.check-btn'),
            document.querySelector('.popup-check'));

sendForm();
validationForm();
showMoreContent(document.querySelector('.add-sentence-btn'),
                document.querySelector('.sentence')
                    .querySelector('.row').childNodes);
