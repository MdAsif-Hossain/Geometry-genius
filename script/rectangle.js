function calculateRectangleArea(){
    const rectanglewidthInput = document.getElementById("rectangle_width");
    const rectanglewidthInputText = rectanglewidthInput.value;
    const width = parseFloat(rectanglewidthInputText);

    const rectangleLengthInput = document.getElementById("rectangle_length");
    const rectangleLengthInputText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthInputText);

    const area = width*length;
    const rectangleAreaSpan = document.getElementById("rectangleAreaFinal");
    rectangleAreaSpan.innerText = area;

}