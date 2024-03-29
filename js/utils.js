'use strict';

(function () {
  var DEBOUNCE_INTERVAL = 500;
  var debounce = function (cb) {
    var lastTimeout = null;
    return function () {
      var parameters = arguments;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        cb.apply(null, parameters);
      }, DEBOUNCE_INTERVAL);
    };
  };
  var getRandomInteger = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  var hideElement = function (item) {
    item.classList.add('hidden');
  };
  var showElement = function (item) {
    item.classList.remove('hidden');
  };
  var errorHandler = function (errorMessage) {
    var error = document.querySelector('.error');
    showElement(error);
    error.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', error);
  };
  window.utils = {
    WIZARD_FIREBALL: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
    WIZARD_NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    WIZARD_COAT: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    WIZARD_EYES: ['black', 'red', 'blue', 'yellow', 'green'],
    WIZARD_FAMILYNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    ESC_KEYCODE: 27,
    ENTER_KEYCODE: 13,
    getRandomInteger: getRandomInteger,
    errorHandler: errorHandler,
    debounce: debounce,
    showElement: showElement,
    hideElement: hideElement
  };
})();
