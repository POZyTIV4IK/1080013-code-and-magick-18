'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var getRandomInteger = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_FAMILYNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var createElement = function (wizards) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards.eyesColor;
  return wizardElement;
};

var wizardCluster = [];

var assignElements = function () {
  var wizard = {};
  for (var i = 0; i < 4; i++) {
    wizard[i] = {
      name: WIZARD_NAMES[getRandomInteger(0, 8)] + ' ' + WIZARD_FAMILYNAMES[getRandomInteger(0, 8)],
      coatColor: WIZARD_COAT[getRandomInteger(0, 6)],
      eyesColor: WIZARD_EYES[getRandomInteger(0, 5)]
    };
    wizardCluster.push(wizard[i]);
  }
  return wizardCluster;
};


var createWizard = function () {
  assignElements();
  var fragment = document.createDocumentFragment();
  for (var k = 0; k < 4; k++) {
    fragment.appendChild(createElement(wizardCluster[k]));
  }
  similarListElement.appendChild(fragment);
};

createWizard();

userDialog.querySelector('.setup-similar').classList.remove('hidden');
