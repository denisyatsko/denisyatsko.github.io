'use strict';

var body = document.querySelector('body');
var toggleMenu = document.querySelector('#toggleMenu');
var header = document.querySelector('#header');
var headerMobileDropdown = document.querySelectorAll('#headerMobileDropdown');
var progressJs = document.querySelectorAll('.progress-js');
var productCardProgressJs = document.querySelectorAll('.product-card-progress-js');
var toDown = document.querySelector('#toDown');
var homeTopSection = document.querySelector('#homeTopSection');
var headerNav = document.querySelector('#headerNav');
var categoriesItemActionBtn = document.querySelectorAll('.categories-item-action-btn');
var preloader = document.querySelector('#preloader');

var preloaderInit = function preloaderInit() {
    setTimeout(function () {
        preloader.style.opacity = '0';
        setTimeout(function () {
            preloader.style.display = 'none';
        }, 1000);
    }, 1000);
};
document.body.onload = function () {
    return preloaderInit();
};

var toggleOn = function toggleOn() {
    for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
        rest[_key] = arguments[_key];
    }

    rest.forEach(function (item) {
        item.classList.toggle('on');
    });
};

var initCircleProgress = function initCircleProgress(item) {
    new CircleProgress(item, {
        max: 100,
        value: item.dataset.value,
        textFormat: 'value'
    });
};

var handlerToDown = function handlerToDown(item) {
    window.scrollTo({
        top: item.offsetHeight + item.getBoundingClientRect().top,
        behavior: 'smooth'
    });
};

document.addEventListener('DOMContentLoaded', function () {
    if (toggleMenu) {
        toggleMenu.onclick = function () {
            return toggleOn(toggleMenu, headerNav);
        };
    }

    if (window.screen.width < 998) {
        headerMobileDropdown.forEach(function (item) {
            item.addEventListener('click', function () {
                return toggleOn(item.parentNode);
            });
        });
    }

    if (progressJs) {
        progressJs.forEach(function (item) {
            return initCircleProgress(item);
        });
    }

    if (productCardProgressJs) {
        if (window.screen.width < 998) {
            productCardProgressJs.forEach(function (item) {
                var value = item.dataset.value;

                item.style.width = value + '%';
                item.nextElementSibling.innerHTML = value;
            });
        } else {
            productCardProgressJs.forEach(function (item) {
                return initCircleProgress(item);
            });
        }
    }

    if (toDown) {
        toDown.onclick = function () {
            return handlerToDown(homeTopSection);
        };
    }

    if (categoriesItemActionBtn) {
        categoriesItemActionBtn.forEach(function (item) {
            return item.addEventListener('click', function () {
                return toggleOn(item.previousElementSibling);
            });
        });
    }
});