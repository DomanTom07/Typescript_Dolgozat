/*
File: app.ts
Author: Tamás Domán
Copyright: 2022, Tamás Domán
Group: Szoft II N
Date: 2022-10-26
Github: https://github.com/DomanTom07/
Licenc: GNU GPL
*/

const calcButton = document.querySelector('#calcButton');
const result = document.querySelector('#result');

calcButton.addEventListener('click', () => {
    const side = document.querySelector('#side') as HTMLInputElement;
    const angle = document.querySelector('#angle') as HTMLInputElement;
    let sideNum:number = Number(side.value);
    let angleNum:number = Number(angle.value);
    let radius = calcRadius(sideNum, angleNum);
    result.textContent = "A beírható kör sugara: " + String(radius);
    side.value = "";
    angle.value = "";
});

function calcRadius(side:number, angle:number) {
    let angleRad:number = angle * Math.PI / 180;
    return side / 2 * Math.sin(angleRad);
}