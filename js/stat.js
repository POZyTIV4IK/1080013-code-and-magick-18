'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 110;
var CLOUD_Y = 190;
var CLOUD_TEXT = 260;
var GAP = 50;
var GAP_SECOND = 10;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 125, 40);
  ctx.fillText('Список результатов:', 125, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(227, 100%, ' + Math.random() * 100 + '%)';
    }
    var A_CONST = GAP * (i + 1);
    var B_CONST = ((BAR_HEIGHT * times[i]) / maxTime);
    var C_CONST = BAR_WIDTH * i;
    ctx.fillRect(CLOUD_X + A_CONST + C_CONST, CLOUD_Y + GAP, BAR_WIDTH, -B_CONST);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + A_CONST + C_CONST, CLOUD_TEXT);
    ctx.fillText(Math.round(times[i]), CLOUD_X + A_CONST + C_CONST, CLOUD_Y + GAP - GAP_SECOND - B_CONST);
  }
};
