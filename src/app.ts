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
    if (checkErrors(sideNum, angleNum)) {
        let radius = calcRadius(sideNum, angleNum);
        result.textContent = "A beírható kör sugara: " + String(radius);
    }
    side.value = "";
    angle.value = "";
});

function calcRadius(side:number, angle:number) {
    let angleRad:number = angle * Math.PI / 180;
    return side / 2 * Math.sin(angleRad);
}
function checkErrors(side, angle) {
    if (!checkSideGiven(side)) return false;
    if (!checkSideNum(side)) return false;
    if (!checkAngleGiven(angle)) return false;
    if (!checkAngleNum(angle)) return false;
    if (!checkAngleValue(angle)) return false;
    return true;
}
function checkSideGiven(side) {
    if (side == "") {
        alert("Hiba! Kérem töltse ki mindkét mezőt!");
        return false;
    }
    return true;
}
function checkSideNum(side) {
    if (isNaN(side)) {
        alert("Hibás adat! Kérem számot adjon meg!");
        return false;
    }
    return true;
}
function checkAngleGiven(angle) {
    if (angle == "") {
        alert("Hiba! Kérem töltse ki mindkét mezőt!");
        return false;
    }
    return true;
}
function checkAngleNum(angle) {
    if (isNaN(angle)) {
        alert("Hibás adat! Kérem számot adjon meg!");
        return false;
    }
    return true;
}
function checkAngleValue(angle) {
    if (angle >= 180) {
        alert("Hibás adat! Rombuszban nem lehet ekkora szög!");
        return false;
    }
    return true;
}