function calculateParallelogramArea(){
    const base = getInputValueById('parallelogram_base');
    const hight = getInputValueById('parallelogram_hight');
    const area = base*hight;
    const parallelogramAreaSpan = document.getElementById('parallelogramAreaFinal');
    parallelogramAreaSpan.innerText = area;

}
function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = inputField.value;
    const input = parseFloat(inputFieldText);
    return input;
}

/*
    const rectanglewidthInput = document.getElementById("rectangle_width");
    const rectanglewidthInputText = rectanglewidthInput.value;
    const width = parseFloat(rectanglewidthInputText);

    const rectangleLengthInput = document.getElementById("rectangle_length");
    const rectangleLengthInputText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthInputText);

    const area = width*length;
    const rectangleAreaSpan = document.getElementById("rectangleAreaFinal");
    rectangleAreaSpan.innerText = area;
     */