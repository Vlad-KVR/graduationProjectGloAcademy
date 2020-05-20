'use strict';



import togglePopUp from './modules/togglePopUp';
import sendForm from './modules/sendForm';
import validationForm from './modules/validationForm';
import showMoreContent from './modules/showMoreContent';
import accordion from './modules/accordion';
import Calculator from './modules/Calculator';

const calculator = new Calculator(accordion,document.querySelector('.constructor > .container'),
                                document.getElementById('calc-result'));

togglePopUp(document.querySelectorAll('.call-btn'),
            document.querySelector('.popup-call'));

togglePopUp(document.querySelectorAll('.discount-btn'),
            document.querySelector('.popup-discount'),
            document.querySelector('.sentence'));

togglePopUp(document.querySelector('.consultation-btn'),
            document.querySelector('.popup-consultation'));

togglePopUp(document.querySelector('.check-btn'),
            document.querySelector('.popup-check'));

sendForm(calculator);
validationForm();
showMoreContent(document.querySelector('.add-sentence-btn'),
                document.querySelector('.sentence')
                    .querySelector('.row').childNodes);

accordion(document.querySelector('.questions > .container'));

calculator.init();

