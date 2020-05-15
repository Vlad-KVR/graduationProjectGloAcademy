//переключаем попап
const togglePopUpCall = () => {
    //получаем кнопку, попап с подложкой и просто попап окно
    const callBtn = document.querySelectorAll('.call-btn'),
        popupCall = document.querySelector('.popup-call'),
        popupContent = document.querySelector('.popup-content');
    //анимация попап окна
    const animationPopUp = () => {
        //если маленький экран, то просто показываем без анимации
        if (window.screen.width < 768) {
            popupCall.style.display = popupCall.style.display === 'block' ? '' : 'block';
            return;
        }
        //если попап активен то движение начинаем
        //с середины, иначе слева 
        popupContent.style.marginLeft = popupCall.style.display === 'block' ? '4%' : '-100%';
        popupCall.style.display = 'block';

        //сама анимация
        const animateContent = () => {
            //если окно в середине или справа то
            //прекращаем анимацию
            if (popupContent.style.marginLeft === '0%' ||
            popupContent.style.marginLeft === '100%') {
                //если окно справа, то скрываем попап
                if (popupContent.style.marginLeft === '100%') {
                    popupCall.style.display = '';
                }

                return;
            }
            //убираем процент, что бы осталось только число
            const number = popupContent.style.marginLeft.slice(0,-1);
            //прибавляем к марджину 2%
            popupContent.style.marginLeft = (+number + 4) + '%';
            //запускаем анимацию опять
            requestAnimationFrame(animateContent);

        };
        //первый запуск анимации
        animateContent();
    };
    //скрываем или показываем попап
    const toggle = () => {
        //забываем событие, что бы вовремя анимации
        //оно не запускалось
        popupCall.removeEventListener('click', toggle, false);

        //отменяем обычное поведение
        let target = event.target;
        //если нажата не кнопка и не номер,
        // то делаем всплытие до popup-content 
        if (!target.classList.contains('popup-close') &&
        !target.classList.contains('call-btn')) {
            target = target.closest('.popup-content');
        }

        //если таргет не пустой и это не popu-content,
        // то запускаем анимацию
        if (!target || !target.classList.contains('popup-content')) {
            event.preventDefault();
            animationPopUp();
        }
        //через полторы секунды вешаем слушатель
        setTimeout(() => popupCall.addEventListener('click', toggle, false), 1500);

    };

    //слушатели
    callBtn.forEach(item => item.addEventListener('click', toggle));
    popupCall.addEventListener('click', toggle, false);
};

export default togglePopUpCall;