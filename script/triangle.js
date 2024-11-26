function traingleArea(){
    const traingleBaseInput = document.getElementById("triangle-base");
    const traingleBaseText = traingleBaseInput.value;
    const base = parseFloat(traingleBaseText)
    //console.log(base);

    const traingleHightInput = document.getElementById("triangle-hight");
    const traingleHightText = traingleHightInput.value;
    const hight = parseFloat(traingleHightText);

    //console.log(hight);
    const area = 0.5 * base * hight;
    const traingleAreaSpan = document.getElementById("traingleAreaFinal");
    traingleAreaSpan.innerText = area; 
}