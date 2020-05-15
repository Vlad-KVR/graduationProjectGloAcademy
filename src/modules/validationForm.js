//валидация
const validationForm = () => {
    //получаем телефоны и имена
    const tel = document.querySelectorAll('input[name="user_phone"]'),
        name = document.querySelectorAll('input[name="user_name"]');
    //цикл по всем телефонам
    tel.forEach(item => {
        //если что-то вводим или удаляем, то...
        item.addEventListener('input', () => {
            //если вводи не Backspace, то...
            if (event.data) {
                //если первая буква +,
                // то получаем последнюю, иначе 1
                const firstLetter = item.value.slice(0,1) === '+' ?
                    item.value.slice(-1) : item.value.slice(0,1);

                if (item.value.length <= 4) item.value = '+7(' + firstLetter;
                if (item.value.length === 6) item.value = item.value + ')';
                if (item.value.length === 10) item.value = item.value + '-';
                if (item.value.length === 13) item.value = item.value + '-';
                if (item.value.length > 16) item.value = item.value.slice(0,16);
            }
            //заменяем все символы которых нет в [] на ничего
            item.value = item.value.replace(/[^0-9\-()+]/g, '');
        });
        //если сработал фокус, то...
        item.addEventListener('focus', () => {
            item.value = item.value.length === 0 ? '+7(' : item.value;
        });
    });
    //цикл по именам
    name.forEach(item => {
        //если что-то вводим или удаляем, то...
        item.addEventListener('input', () => {
            //заменяем все символы которых нет в [] на ничего
            item.value = item.value.replace(/[^А-Яа-я]/g, '');
        });
    });

};  

export default validationForm;