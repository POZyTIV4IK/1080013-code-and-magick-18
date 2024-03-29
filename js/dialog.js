'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var error = document.querySelector('.error');
  var setupWizardForm = userDialog.querySelector('.setup-wizard-form');
  var closeSettingsWindow = userDialog.querySelector('.setup-close');
  var openSettingsWindow = document.querySelector('.setup-open');
  var userNameForm = userDialog.querySelector('.setup-user-name');
  var uploadIcon = userDialog.querySelector('.upload');
  var startPosition = userDialog.offset;

  window.utils.showElement(userDialog.querySelector('.setup-similar'));

  var openPopup = function () {
    window.utils.showElement(userDialog);
  };

  var closePopup = function () {
    userDialog.style = startPosition + 'px';
    window.utils.hideElement(userDialog);
  };

  closeSettingsWindow.addEventListener('click', function () {
    closePopup();
  });

  closeSettingsWindow.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.utils.ENTER_KEYCODE) {
      closePopup();
    }
  });

  document.addEventListener('keydown', function (evt) {
    if (userNameForm !== document.activeElement) {
      if (evt.keyCode === window.utils.ESC_KEYCODE) {
        closePopup();
      }
    }
  });


  openSettingsWindow.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.utils.ENTER_KEYCODE) {
      openPopup();
    }
  });

  openSettingsWindow.addEventListener('click', function () {
    openPopup();
  });

  uploadIcon.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      userDialog.style.top = (userDialog.offsetTop - shift.y) + 'px';
      userDialog.style.left = (userDialog.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (myEvt) {
          myEvt.preventDefault();
          uploadIcon.removeEventListener('click', onClickPreventDefault);
        };
        uploadIcon.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  var submitSuccess = function () {
    closePopup();
    window.utils.hideElement(error);
  };

  setupWizardForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(setupWizardForm), submitSuccess, window.utils.errorHandler);
  });
})();
