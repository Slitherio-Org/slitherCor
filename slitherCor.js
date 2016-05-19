// ==UserScript==
// @name        slitherio cor
// @namespace   slitherCor
// @description Show your cordinates of slither.io
// @include     *://slither.io/*
// @updateURL   https://raw.githubusercontent.com/butaixianran/slitherCor/master/slitherCor.js
// @downloadURL https://raw.githubusercontent.com/butaixianran/slitherCor/master/slitherCor.js
// @version     0.0.1
// @grant       none
// ==/UserScript==


var corContainer = document.createElement('span');

function updateElem() {
  var x = window.snake ? parseInt(snake.xx) : 0;
  var y = window.snake ? parseInt(snake.yy) : 0;
  corContainer.textContent = 'X: ' + x + ', Y: ' + y;
}

window.onload = function(){
    corContainer.style.position = 'absolute';
    corContainer.style.zIndex = '666';
    corContainer.style.textAlign = 'center';
    corContainer.style.bottom = '40px';
    corContainer.style.left = '10px';
    corContainer.style.fontSize = '10px';
    corContainer.style.fontFamily = 'Arial, \'Helvetica Neue\', Helvetica, sans-serif';
    corContainer.style.color = '#FFF';
    //corContainer.style.color = 'rgba(255,255,255,0.5)';
    document.body.appendChild(corContainer);

    timerID = setInterval(function () {
        updateElem();
    }, 1000);
};
