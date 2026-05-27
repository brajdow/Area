document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.specs__list-item a');
    
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            var currentList = this.closest('.specs__list');
            var allLists = document.querySelectorAll('.specs__list');
            
            if (currentList.classList.contains('specs__list--active')) {
                currentList.classList.remove('specs__list--active');
            } else {
                allLists.forEach(function(list) {
                    list.classList.remove('specs__list--active');
                });
                currentList.classList.add('specs__list--active');
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__top');
    const overlay = document.querySelector('.greyback');
    
    function closeMenu() {
        menu.classList.remove('header__top--active');
        overlay.classList.remove('greyback--show');
        burger.classList.remove('burger--active');
    }
    
    function openMenu() {
        menu.classList.add('header__top--active');
        overlay.classList.add('greyback--show');
        burger.classList.add('burger--active');
    }
    
    burger.addEventListener('click', function(e) {
        e.preventDefault();
        if (menu.classList.contains('header__top--active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    
    // Закрытие при клике на оверлей
    overlay.addEventListener('click', function() {
        closeMenu();
    });

    $(window).on('scroll', function() {
    if (window.scrollY > 0 && !$('.header__top').hasClass('header__top--active')) {
        $('.burger').addClass('burger--follow');
    } else {
        $('.burger').removeClass('burger--follow');
        }
    });

});