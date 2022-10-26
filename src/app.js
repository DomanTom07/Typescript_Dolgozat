/*
File: app.ts
Author: Tamás Domán
Copyright: 2022, Tamás Domán
Group: Szoft II N
Date: 2022-10-26
Github: https://github.com/DomanTom07/
Licenc: GNU GPL
*/
var calcButton = document.querySelector('#calcButton');
var result = document.querySelector('#result');
calcButton.addEventListener('click', function () {
    var side = document.querySelector('#side');
    var angle = document.querySelector('#angle');
    var sideNum = Number(side.value);
    var angleNum = Number(angle.value);
    var radius = calcRadius(sideNum, angleNum);
    result.textContent = "A beírható kör sugara: " + String(radius);
    side.value = "";
    angle.value = "";
});
function calcRadius(side, angle) {
    var angleRad = angle * Math.PI / 180;
    return side / 2 * Math.sin(angleRad);
}
