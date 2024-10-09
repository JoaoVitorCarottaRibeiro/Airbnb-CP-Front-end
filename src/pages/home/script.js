document.addEventListener('scroll', function () {
    var box = document.querySelector('.scroll-box');
    var miniDescricao = document.querySelector('.mini-descricao');
    var oferecimento = document.querySelector('.comodidades');
    
    var miniDescricaoTop = miniDescricao.getBoundingClientRect().top + window.pageYOffset;
    var oferecimentoTop = oferecimento.getBoundingClientRect().top + window.pageYOffset;

    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop >= miniDescricaoTop && scrollTop < oferecimentoTop - box.offsetHeight) {
        box.style.position = 'fixed';
        box.style.top = '20px';
    } else if (scrollTop < miniDescricaoTop) {
        box.style.position = 'absolute';
        box.style.top = miniDescricaoTop + 'px';
    } else if (scrollTop >= oferecimentoTop - box.offsetHeight) {
        box.style.position = 'absolute';
        box.style.top = (oferecimentoTop - box.offsetHeight) + 'px';
    }
});
