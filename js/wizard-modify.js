'use strict';

(function () {
  var setupFireball = document.querySelector('.setup-fireball-wrap');
  var setupFireballInput = setupFireball.querySelector('input');
  var setupWizardAppearance = document.querySelector('.setup-wizard-appearance');
  var setupWizardCoatInput = setupWizardAppearance.querySelector('input[name="coat-color"]');
  var setupWizardEyesInput = setupWizardAppearance.querySelector('input[name="eyes-color"]');
  var wizardCoat = setupWizardAppearance.querySelector('.wizard-coat');
  var wizardEyes = setupWizardAppearance.querySelector('.wizard-eyes');


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
