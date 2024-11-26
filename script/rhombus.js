function calculateRhombusArea(){
    const base = getInputValueById('d1');
    const hight = getInputValueById('d2');
    const area = base*hight;
    const parallelogramAreaSpan = document.getElementById('rhombusAreaFinal');
    parallelogramAreaSpan.innerText = area;
}
function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = inputField.value;
    const input = parseFloat(inputFieldText);
    return input;
}