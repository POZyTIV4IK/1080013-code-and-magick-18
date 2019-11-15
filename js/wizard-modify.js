'use strict';

(function () {
  var setupFireball = document.querySelector('.setup-fireball-wrap');
  var setupFireballInput = setupFireball.querySelector('input');
  var setupWizardAppearance = document.querySelector('.setup-wizard-appearance');
  var setupWizardCoatInput = setupWizardAppearance.querySelector('input[name="coat-color"]');
  var setupWizardEyesInput = setupWizardAppearance.querySelector('input[name="eyes-color"]');
  var wizardCoat = setupWizardAppearance.querySelector('.wizard-coat');
  var wizardEyes = setupWizardAppearance.querySelector('.wizard-eyes');

  var colorCoat;
  var colorEyes;
  var wizards = [];
  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === colorCoat) {
      rank += 2;
    }
    if (wizard.colorEyes === colorEyes) {
      rank += 1;
    }
    return rank;
  };

  var updateWizards = function () {
    window.wizardCreation.render(wizards.slice().sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
      }
      return rankDiff;
    }));
  };

  var changeColor = function (item) {
    var itemData;
    var itemInput;
    if (item.classList.contains('wizard-coat')) {
      itemData = window.utils.WIZARD_COAT;
      itemInput = setupWizardCoatInput;
    } else if (item.classList.contains('wizard-eyes')) {
      itemData = window.utils.WIZARD_EYES;
      itemInput = setupWizardEyesInput;
    } else if (item.classList.contains('setup-fireball')) {
      itemData = window.utils.WIZARD_FIREBALL;
      itemInput = setupFireballInput;
    }
    var colorNow = itemData[window.utils.getRandomInteger(0, itemData.length)];
    itemInput.value = colorNow;
    item.style.backgroundColor = colorNow;
    item.style.fill = colorNow;
    return colorNow;
  };

  wizardCoat.addEventListener('click', window.utils.debounce(function (evt) {
    changeColor(evt.target);
    colorCoat = changeColor(evt.target);
    updateWizards();
  }));

  wizardEyes.addEventListener('click', window.utils.debounce(function (evt) {
    changeColor(evt.target);
    colorEyes = changeColor(evt.target);
    updateWizards();
  }));

  setupFireball.addEventListener('click', function (evt) {
    changeColor(evt.target);
  });

  var successHandler = function (data) {
    wizards = data;
    updateWizards();
  };

  window.backend.load(successHandler, window.utils.errorHandler);
})();
