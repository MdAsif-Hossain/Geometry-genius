

function calculatePentagonArea(){
   // console.log("HI!")
    const base = getInputValueById('p1');
    const hight = getInputValueById('b1');
    const area = 0.5*base*hight;
    const pentagonAreaSpan = document.getElementById('pentagonAreaFinal');
    pentagonAreaSpan.innerText = area;
    //console.log(area);
}
function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = inputField.value;
    const input = parseFloat(inputFieldText);
    return input;
}