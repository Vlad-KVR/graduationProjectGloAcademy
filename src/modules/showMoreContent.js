const showMoreContent = (moreBtn, content, clases = ['hidden', 'visible-sm-block']) => {
    const showContent = () => {
        content.forEach(element => {
            if (element.classList) {
                clases.forEach(clas => element.classList.remove(clas));
            }
        });
        moreBtn.classList.add(clases[0]);
    };

    moreBtn.addEventListener('click', showContent, false);

};

export default showMoreContent;