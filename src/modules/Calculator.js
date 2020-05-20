//калькулятор
class Calculator {
    constructor(accordion, container, totalValue) {
        this.numberOfCameras = 1;
        this.wells = [
            {
                diameter: 1.4,
                numberOfRings: 1
            },
            {
                diameter: 1.4,
                numberOfRings: 1
            },
        ];
        this.isWellBottom = true;
        this.distanceToHome = 0;
        this.totalValue = totalValue;
        this.container = container;
        this.accordion = accordion;
    }
    //изменяем данные в обьекте
    setWells() {
        //берем данные со страницы
        const selects = this.container.querySelector('#collapseTwo').querySelectorAll('select'); 
        //проходим по колодцам и меняем данные
        this.wells.forEach((item, i) => {
            const selectDi = selects[0 + (i * 2)],
                selectNu = selects[1 + (i * 2)];
            item.diameter = +selectDi.options[selectDi.selectedIndex].value.replace(/[^0-9.]/g,'');
            item.numberOfRings = +selectNu.options[selectNu.selectedIndex].value.replace(/[^0-9]/g,'');
        });
    }
    //меняем расстояние до дома
    setDistanceToHome() {
        this.distanceToHome = this.container.querySelector('input[type="text"]').value;
    }
    //следущая вкладка
    nextStep(target) {
        document.getElementById(target.dataset.next).click();
    }
    //скрываем или показываем 2 колодец
    toggleSecondWell() {
        document.querySelector('.second-well').style.display = this.numberOfCameras === 1 ?
            'none' : '';
    }
    //анимация суммы
    countSumAnimation(total) {
        //получаем сумму со страницы
        let totalText  = +this.totalValue.value;
        //если ее еще нет, то ...
        if (!totalText) totalText = 0;
        //получаем два процента от модуля разницы
        // суммы на страницу и новой суммы
        const twoPercent = Math.abs(total-totalText)/100 * 2;
        //запускаем анимацию
        const idInterval = setInterval(() => {
            //прибавляем/отнимаем 2 процента  сумме
            totalText = totalText < total ? totalText + twoPercent : totalText - twoPercent;

            //выводим округленное значение на страницу
            this.totalValue.value = Math.floor(totalText);

            //если значение на странице близко к сумме, то...
            if ((total + twoPercent + 1) > totalText &&
            (total - twoPercent - 1) < totalText) {
                //знач. на странице равно реальной сумме
                this.totalValue.value = Math.round(total);
                //останавливаем анимацию
                clearInterval(idInterval);
                return;
            }

        }, 10);

    }
    //считаем сумму
    countSum() {
        let sum = 0;
        //начальная сумма
        const startSum = this.numberOfCameras === 1 ? 10000 : 15000;

        sum = startSum;
        //проходим по колодцам
        this.wells.forEach((item, i) => {
            //если колодец один, то на втором остановимся
            if (this.numberOfCameras === 1 && i === 1) return;
            //подсчеты
            if (item.diameter === 2) sum += Math.round(startSum/100 * 20);

            if (item.numberOfRings === 2) sum += Math.round(startSum/100 * 30);
            if (item.numberOfRings === 3) sum += Math.round(startSum/100 * 50);
        });
        //если днище есть
        if (this.isWellBottom) {
            //подсчеты
            sum += this.numberOfCameras === 1 ? 1000: 2000;
        }
        //запускаем анимацию
        this.countSumAnimation(sum);
    }
    //слушатели
    eventListeners() {
        //клик по контейнеру
        this.container.addEventListener('click', event => {
            
            let targetOne = event.target.closest('.construct-btn');
            let targetTwo = event.target.closest('.onoffswitch-inner');
            //если мы кликнули на кнопку 'следующий шаг' то запускаем nextStep
            if (targetOne && targetOne.classList.contains('button') && !targetOne.classList.contains('call-btn')) {
                event.preventDefault();
                this.nextStep(targetOne);
            } //если кликнули на первый переключатель
            else if (targetTwo && targetTwo.parentNode.htmlFor === "myonoffswitch") {
                this.numberOfCameras = targetTwo.offsetLeft > -100 ? 2 : 1;
                this.toggleSecondWell();
                this.countSum();
            } //если кликнули на 2 переключатель 
            else if (targetTwo && targetTwo.parentNode.htmlFor === "myonoffswitch-two") {
                this.isWellBottom = targetTwo.offsetLeft > -100 ? false : true;
                this.countSum();
            }

            
        });
        //изменения в контейнере
        this.container.addEventListener('change', event => {
            const target = event.target;
            //если изменяем select или дистанцию до дома
            if (target.matches('select') || target.matches('input[type="text"]')) {
                //изменяем
                if (target.matches('select')) this.setWells();
                if (target.matches('input[type="text"]')) this.setDistanceToHome();
                //запускаем подсчет суммы
                this.countSum();
            }
        });
    }
    //инициализация
    init() {
        this.accordion(this.container);
        this.eventListeners();
        this.toggleSecondWell();
    }
    //получение обьекта
    toString() {
        const obj = {};
        for (let key in this) {
            if (key !== 'totalValue' && key !== 'container' 
                && key !== 'accordion' && key !== 'wells') {
                obj[key] = this[key];
            } else if (key === 'totalValue') {
                obj[key] = this[key].value;
            } else if (key === 'wells') {
                obj[key] = this.numberOfCameras === 1 ? this[key][0] : this[key];
            }
        }
        return obj;
    }
}
export default Calculator;