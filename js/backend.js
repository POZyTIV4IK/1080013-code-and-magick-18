'use strict';

(function () {
  var xhr = new XMLHttpRequest();
  var xhrPrototype = function (onLoad, onError) {
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000; // 10s
  };

  var save = function (data, onLoad, onError) {
    var URL = 'https://js.dump.academy/code-and-magick';
    xhrPrototype(onLoad, onError);
    xhr.open('POST', URL);
    xhr.send(data);
  };

  var load = function (onLoad, onError) {
    var URL = 'https://js.dump.academy/code-and-magick/data';
    xhr.responseType = 'json';
    xhrPrototype(onLoad, onError);
    xhr.open('GET', URL);
    xhr.send();
  };
  window.backend = {
    save: save,
    load: load
  };
})();
