//onclick to burger

document.querySelector('.js-btn').onclick = function () {
    document.querySelector('.js-btn').classList.toggle('is-active');
    document.querySelector('.js-drop').classList.toggle('is-open');
};
