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
var categoriesItems = document.querySelectorAll('.categories-content');
var preloader = document.querySelector('#preloader');
var reviewItems = document.querySelectorAll('.review__product-card');

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

var calcAvarege = function calcAvarege(item) {
    var ratingItems = item.querySelectorAll('.product-card-progress-js');
    var average = item.querySelector('.sum-js');
    var valuesArray = [];
    ratingItems.forEach(function (item) {
        return valuesArray.push(parseInt(item.dataset.value, 10));
    });
    var sum = valuesArray.reduce(function (a, b) {
        return a + b;
    });
    var averageValue = sum / valuesArray.length;

    average.innerText = averageValue;
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
        productCardProgressJs.forEach(function (item) {
            if (window.screen.width < 998) {
                var value = item.dataset.value;

                item.style.width = value + '%';
                item.nextElementSibling.innerHTML = value;
            } else {
                productCardProgressJs.forEach(function (item) {
                    initCircleProgress(item);
                });
            }
        });
    }

    if (reviewItems) {
        reviewItems.forEach(function (item) {
            return calcAvarege(item);
        });
    }

    if (toDown) {
        toDown.onclick = function () {
            return handlerToDown(homeTopSection);
        };
    }

    if (categoriesItemActionBtn && categoriesItems) {
        categoriesItems.forEach(function (item) {
            item.addEventListener('mouseleave', function () {
                var list = item.querySelector('.list-container ul');

                item.style.zIndex = 'auto';

                if (list.classList.contains('on')) {
                    list.classList.remove('on');
                }
            });

            item.addEventListener('mouseenter', function () {
                item.style.zIndex = 4;
            });
        });

        categoriesItemActionBtn.forEach(function (item) {
            var list = item.previousElementSibling;

            if (window.screen.width > 998) {
                item.addEventListener('mouseenter', function () {
                    if (!list.classList.contains('on')) {
                        list.classList.add('on');
                    }
                });
            }

            item.addEventListener('click', function (e) {
                e.preventDefault();

                if (list.classList.contains('on')) {
                    list.classList.remove('on');
                } else if (window.screen.width < 998) {
                    list.classList.add('on');
                }
            });
        });
    }
});