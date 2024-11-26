function calculateEllipsArea(){
    const base = getInputValueById('axix');
    const hight = getInputValueById('base');
    const area = 3.1416*base*hight;
    const parallelogramAreaSpan = document.getElementById('ellipseAreaFinal');
    parallelogramAreaSpan.innerText = area;
}
function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = inputField.value;
    const input = parseFloat(inputFieldText);
    return input;
}