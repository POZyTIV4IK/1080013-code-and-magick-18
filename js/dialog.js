'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var form = userDialog.querySelector('.setup-wizard-form');
  var closeSettingsWindow = userDialog.querySelector('.setup-close');
  var openSettingsWindow = document.querySelector('.setup-open');
  var userNameForm = userDialog.querySelector('.setup-user-name');
  var uploadIcon = userDialog.querySelector('.upload');
  var startPosition = userDialog.offset;

  userDialog.querySelector('.setup-similar').classList.remove('hidden');

  var openPopup = function () {
    userDialog.classList.remove('hidden');
  };

  var closePopup = function () {
    userDialog.style = startPosition + 'px';
    userDialog.classList.add('hidden');
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

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), function () {
      userDialog.classList.add('hidden');
    }, errorHandler);
  });
})();
