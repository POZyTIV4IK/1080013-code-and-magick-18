'use strict';

(function () {
  var closeSettingsWindow = window.userDialog.querySelector('.setup-close');
  var openSettingsWindow = document.querySelector('.setup-open');
  var userNameForm = window.userDialog.querySelector('.setup-user-name');
  var uploadIcon = window.userDialog.querySelector('.upload');
  var startPosition = window.userDialog.offset;
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.userDialog.querySelector('.setup-similar').classList.remove('hidden');

  var openPopup = function () {
    window.userDialog.classList.remove('hidden');
  };

  var closePopup = function () {
    window.userDialog.style = startPosition + 'px';
    window.userDialog.classList.add('hidden');
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

      window.userDialog.style.top = (window.userDialog.offsetTop - shift.y) + 'px';
      window.userDialog.style.left = (window.userDialog.offsetLeft - shift.x) + 'px';
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


})();
