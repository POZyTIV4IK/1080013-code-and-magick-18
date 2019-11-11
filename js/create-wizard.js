'use strict';

(function () {
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
    var takeNumber = wizards.length > 4 ? 4 : wizards.length;
    similarListElement.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      similarListElement.appendChild(createElement(wizards[i]));
    }
    similar.classList.remove('hidden');
    error.classList.add('hidden');
  };

  window.createWizard = {
    render: render
  };
})();
