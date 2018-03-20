﻿function SaveImage() { }

SaveImage.prototype.generate = function (cells, edge) {
  var background = ['#eee4da', '#ede0c8', '#f2b179', '#f59563', '#f67c5f', '#f65e3b', '#edcf72', '#edcc61', '#edc850', '#edc53f', '#edc22e', '#3c3a32'];
  var rectColor = function (value) {
    var i = 0;
    while (value > 2) i++, value >>= 1;
    if (i >= background.length) i = background.length - 1;
    return background[i];
  };
  var canvas = document.createElement('canvas');
  var width = edge * cells.length;
  var height = edge * cells[0].length;
  canvas.height = height; canvas.width = width;
  var context = canvas.getContext('2d');
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  for (var x = 0; x < cells.length; x++) {
    for (var y = 0; y < cells[x].length; y++) {
      if (!cells[x][y]) continue;
      context.fillStyle = rectColor(cells[x][y].value);
      context.fillRect(x * edge, y * edge, edge, edge);
    }
  }
  context.fillStyle = '#333';
  context.fillText("‮8402‭", width >> 1, height >> 1);
  return canvas.toDataURL('image/png');
};