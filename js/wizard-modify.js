'use strict';

(function () {
  var setupWizardAppearance = window.userDialog.querySelector('.setup-wizard-appearance');
  var setupWizardCoatInput = setupWizardAppearance.querySelector('input[name="coat-color"]');
  var setupWizardEyesInput = setupWizardAppearance.querySelector('input[name="eyes-color"]');
  var setupFireball = window.userDialog.querySelector('.setup-fireball-wrap');
  var setupFireballInput = setupFireball.querySelector('input');
  var wizardCoat = window.userDialog.querySelector('.wizard-coat');
  var wizardEyes = window.userDialog.querySelector('.wizard-eyes');

  var WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


  var changeColor = function (item) {
    var itemData;
    var itemInput;
    if (item.classList.contains('wizard-coat')) {
      itemData = window.WIZARD_COAT;
      itemInput = setupWizardCoatInput;
    } else if (item.classList.contains('wizard-eyes')) {
      itemData = window.WIZARD_EYES;
      itemInput = setupWizardEyesInput;
    } else if (item.classList.contains('setup-fireball')) {
      itemData = WIZARD_FIREBALL;
      itemInput = setupFireballInput;
    }
    var colorNow = itemData[window.getRandomInteger(0, itemData.length)];
    itemInput.value = colorNow;
    item.style.backgroundColor = colorNow;
    item.style.fill = colorNow;
  };

  wizardCoat.addEventListener('click', function (evt) {
    changeColor(evt.target);
  });

  wizardEyes.addEventListener('click', function (evt) {
    changeColor(evt.target);
  });

  setupFireball.addEventListener('click', function (evt) {
    changeColor(evt.target);
  });

})();
