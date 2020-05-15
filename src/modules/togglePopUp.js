const togglePopUp = (callBtn, popupSubstrate, wrapper) => {
            //получаем кнопку, попап с подложкой и просто попап окно
            const popupContent = popupSubstrate.querySelector('.popup-content');
        //анимация попап окна
        const animationPopUp = () => {
            //если маленький экран, то просто показываем без анимации
            if (window.screen.width < 768) {
                popupSubstrate.style.display = popupSubstrate.style.display === 'block' ? '' : 'block';
                return;
            }
            //если попап активен то движение начинаем
            //с середины, иначе слева 
            popupContent.style.marginLeft = popupSubstrate.style.display === 'block' ? '4%' : '-100%';
            popupSubstrate.style.display = 'block';
    
            //сама анимация
            const animateContent = () => {
                //если окно в середине или справа то
                //прекращаем анимацию
                if (popupContent.style.marginLeft === '0%' ||
                popupContent.style.marginLeft === '100%') {
                    //если окно справа, то скрываем попап
                    if (popupContent.style.marginLeft === '100%') {
                        popupSubstrate.style.display = '';
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
        const toggle = event => {
            //забываем событие, что бы вовремя анимации
            //оно не запускалось
            popupSubstrate.removeEventListener('click', toggle, false);
    
            //отменяем обычное поведение
            let target = event.target;
            //если нажата не кнопка и не номер,
            // то делаем всплытие до popup-content 
            if (!target.classList.contains('popup-close') &&
            !target.classList.contains('discount-btn')) {
                target = target.closest('.popup-dialog');
            }
    
            //если таргет не пустой и это не popu-content,
            // то запускаем анимацию
            if (!target || !target.classList.contains('popup-dialog')) {
                event.preventDefault();
                animationPopUp();
            }
            //через полторы секунды вешаем слушатель
            setTimeout(() => popupSubstrate.addEventListener('click', toggle, false), 1000);
    
        };
    
        //слушатели
        //если передали обертку, то...
        if (wrapper) {
            //вешаем событие на обертку
            wrapper.addEventListener('click', () => {
                let target = event.target;
                //если target не содержит нужного класса,
                // то происходит всплытие до него
                if (!target.classList.contains(callBtn[0].classList[0])) {
                    target = target.closest('.' + callBtn[0].classList[0]);
                }
                //если target не null, то запускаем toggle
                if (target) toggle(event);
            });
        } else {
            //если обертку не передали,
            // то вешаем событие на все кнопки
            if (callBtn.length) {
                callBtn.forEach(item => item.addEventListener('click', toggle));
            } else {
                callBtn.addEventListener('click', toggle)
            }
        }
        //если нажали на подложку и все что в ней,
        // то запускаем toggle
        popupSubstrate.addEventListener('click', toggle, false);
};

export default togglePopUp;