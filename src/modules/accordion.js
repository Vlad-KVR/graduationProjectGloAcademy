//аккардион
const accordion = (container) => {
    //забываем активный лист
    const removeActiveList = () => {
        //проходим по всем элементам
        container.querySelectorAll('.collapse').forEach(element => {

            //если элемента содержит класс in то...
            if (element.classList.contains('in')) {

                //получаем высоту текста
                const maxHeight = element.scrollHeight;
                //устанавливаем высоту текста
                element.style.height = maxHeight + 'px';
                //узнаем  сколько будем отнимать
                const concat = (Math.ceil(maxHeight/100) * 4);
                //анимация
                const animate = () => {
                    //получаем высоту без 'px'
                    const number = element.style.height.slice(0, -2);
                    //если высота меньше отнимаего числа, то...
                    if (number <= concat) {
                        //высота элем. равна нулю
                        //и возвращаемся
                        element.style.height = '0px';
                        return;
                    }
                    //уменьшаем высоту на concat
                    element.style.height = +number - concat + 'px';
                    //запускаем следующий кадр
                    requestAnimationFrame(animate);
                }; 
                //запускаем анимацию впервые
                animate();
                //забываем in через 800
                setTimeout(() => element.classList.remove('in'), 500);
                return;
            }
        });
    };
    //делаем лист видимым
    const addActiveList = target => {
                //получаем лист с текстом
                const collapse = target.parentNode.querySelector('.collapse');
                //добавляем класс in
                collapse.classList.add('in');
                //получаем его высоту
                const maxHeight = collapse.scrollHeight;
                //узнаем  сколько будем прибавлять
                const concat = Math.ceil(maxHeight/100) * 4;
                //анимация
                const animate = () => {
                        const number = collapse.style.height.slice(0, -2);
                        if (number >= maxHeight) {
                            return;
                        }
                        collapse.style.height = +number + concat + 'px';
                        requestAnimationFrame(animate);
                };
                animate();
    };
    //отменяет обычное поведение
    const preventDefault = () => {
        event.preventDefault();
    };
    //переключает на новый лист
    const toggle = () => {
        //получаем элемент
        let target = event.target.closest('.panel-heading');
        //если элемент есть и его collapse не содержит in, то...
        if (target && !target.parentNode.querySelector('.collapse').classList.contains('in')) {
            //забываем слушатель
            container.removeEventListener('click', toggle, false);

            //забываем активный лист
            //и добавляем новый
            removeActiveList();
            addActiveList(target);

            //через 800 миллисек.
            setTimeout(() => {
                //добавляем старый слушатель
                container.addEventListener('click', toggle, false);
            }, 550);

        } 

    };
    container.addEventListener('click', preventDefault, false);
    container.addEventListener('click', toggle, false);
};

export default accordion;