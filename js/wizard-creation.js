'use strict';

(function () {
  var WIZARDS_QUANTITY = 4;

  var userDialog = document.querySelector('.setup');
  var error = document.querySelector('.error');
  var similar = document.querySelector('.setup-similar');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var createElement = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  var render = function (wizards) {
    var selectedNumber = wizards.length > WIZARDS_QUANTITY ? WIZARDS_QUANTITY : wizards.length;
    similarListElement.innerHTML = '';
    for (var i = 0; i < selectedNumber; i++) {
      similarListElement.appendChild(createElement(wizards[i]));
    }
    window.utils.showElement(similar);
    window.utils.hideElement(error);
  };

  window.wizardCreation = {
    render: render
  };
})();
