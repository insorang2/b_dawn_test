const canvas = document.getElementById("puzzleCanvas");
const ctx = canvas.getContext("2d");

const image = new Image();

image.src = "images/puzzle.png";

image.onload = function() {

    ctx.drawImage(
        image,
        0,
        0,
        canvas.width,
        canvas.height
    );

};