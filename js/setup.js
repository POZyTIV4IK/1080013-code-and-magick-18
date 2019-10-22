'use strict';

var userDialog = document.querySelector('.setup');
var openSettingsWindow = document.querySelector('.setup-open');
var closeSettingsWindow = userDialog.querySelector('.setup-close');
var setupWizardAppearance = userDialog.querySelector('.setup-wizard-appearance');
var setupWizardCoatInput = setupWizardAppearance.querySelector('input[name="coat-color"]');
var setupWizardEyesInput = setupWizardAppearance.querySelector('input[name="eyes-color"]');
var setupFireball = userDialog.querySelector('.setup-fireball-wrap');
var setupFireballInput = setupFireball.querySelector('input');
var wizardCoat = userDialog.querySelector('.wizard-coat');
var wizardEyes = userDialog.querySelector('.wizard-eyes');
var userNameForm = userDialog.querySelector('.setup-user-name');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var getRandomInteger = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_FAMILYNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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

var openPopup = function () {
  userDialog.classList.remove('hidden');
};

var closePopup = function () {
  userDialog.classList.add('hidden');
};

closeSettingsWindow.addEventListener('click', function () {
  closePopup();
});

closeSettingsWindow.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

document.addEventListener('keydown', function (evt) {
  if (userNameForm !== document.activeElement) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  }
});


openSettingsWindow.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

openSettingsWindow.addEventListener('click', function () {
  openPopup();
});

wizardCoat.addEventListener('click', function () {
  var wizardCoatColorNow = WIZARD_COAT[getRandomInteger(0, 6)];
  setupWizardCoatInput.value = wizardCoatColorNow;
  wizardCoat.style.fill = wizardCoatColorNow;
});

wizardEyes.addEventListener('click', function () {
  var wizardEyesColorNow = WIZARD_EYES[getRandomInteger(0, 5)];
  setupWizardEyesInput.value = wizardEyesColorNow;
  wizardEyes.style.fill = wizardEyesColorNow;
});

setupFireball.addEventListener('click', function () {
  var wizardFireballColorNow = WIZARD_FIREBALL[getRandomInteger(0, 5)];
  setupFireballInput.value = wizardFireballColorNow;
  setupFireball.style.backgroundColor = wizardFireballColorNow;
});
