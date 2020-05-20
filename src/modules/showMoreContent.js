//кнопка больше
const showMoreContent = (moreBtn, content, clases = ['hidden', 'visible-sm-block']) => {
    //показываем весь контент
    const showContent = () => {
        //проходим по всем элементам и забываем классы которые скрывали их
        content.forEach(element => {
            if (element.classList) {
                clases.forEach(clas => element.classList.remove(clas));
            }
        });
        //скрываем кнопку больше
        moreBtn.classList.add(clases[0]);
    };
    //слушатель
    moreBtn.addEventListener('click', showContent, false);

};

export default showMoreContent;