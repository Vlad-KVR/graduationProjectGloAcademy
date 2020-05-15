//отправка формы
const sendForm = () => {
    //оповещения загрузки,успешной отправки и ошибки
    const errorMessage = `<div class="sendError">Что-то пошло не так</div>`,
        loadMessage = `<div class="wrapper__lds-ellipsis"><div class="lds-ellipsis">
                        <div></div><div></div><div></div><div></div></div></div>`,
        successMessage = `<div class="sendOk">&#10003</div>`;
    //получение всех форм
    const forms = document.forms;


    //отправка данных на сервер
    const postData = formData => fetch('../server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'form/multipart'
            },
            body: formData
        });
    
    //цикл по всем формам
    [...forms].forEach(form => {
        //слушатель
        form.addEventListener('submit', event => {
            //отмена стандарт. поведения
            event.preventDefault();

            //убираем все сообщения об
            //ошибках или успещной отправке
            document.querySelectorAll('.sendError').forEach(item => item.remove());
            document.querySelectorAll('.sendOk').forEach(item => item.remove());
            //добавляем сообщение о загрузке
            form.insertAdjacentHTML('beforeend',loadMessage);
            
            //собираем данные с форм
            const form2 = document.querySelector(`form[name=${form.dataset.form2}]`);
            const formData = new FormData(form);

            //если 2 форма существует, то
            // добавляем ее в formData
            if (form2) {
                const formData2 = new FormData(form2);
                formData2.forEach((val, key) => formData.append(key,val));
            }

            //вызов отправки и передаем обьект
            postData(formData)
                //если получилось
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error("status response not 200");
                    }
                    //удаляем сообщение о загрузке
                    //и добавляем об успешной отправке
                    document.querySelector('.lds-ellipsis').remove();
                    form.insertAdjacentHTML('beforeend',successMessage);
                })
                .catch(error => {
                    //если ошибка, то выводим в консоль
                    console.log(error);
                    //удаляем сообщение о загрузке
                    //и добавляем об ошибке
                    document.querySelector('.lds-ellipsis').remove();
                    form.insertAdjacentHTML('beforeend',errorMessage);
                });
            //очищаем все инпуты
            const formElements = form2 ? [...form.elements, ...form2.elements] :
                [...form.elements];

            formElements.forEach(elem => {
                if (elem.tagName.toLowerCase() === 'input') {
                    elem.value = '';
                }
            });
        });
    });
    

};

export default sendForm;