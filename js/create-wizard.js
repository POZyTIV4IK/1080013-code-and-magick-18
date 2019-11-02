'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

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
        name: window.utils.WIZARD_NAMES[window.utils.getRandomInteger(0, 8)] + ' ' + window.utils.WIZARD_FAMILYNAMES[window.utils.getRandomInteger(0, 8)],
        coatColor: window.utils.WIZARD_COAT[window.utils.getRandomInteger(0, 6)],
        eyesColor: window.utils.WIZARD_EYES[window.utils.getRandomInteger(0, 5)]
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
})();
