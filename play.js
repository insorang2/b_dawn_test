document.getElementById("forPuzzle").innerHTML = `
<img
    id="puzzleImage"
    src="images/puzzle.png"
    style="
        width:90%;
        max-width:900px;
        margin-top:30px;
        display:none;
    "
>
`;

const hintBtn = document.getElementById("hintBtn");
const puzzleImage = document.getElementById("puzzleImage");

hintBtn.addEventListener("click", () => {
    puzzleImage.style.display = "block";

    setTimeout(() => {
        puzzleImage.style.display = "none";
    }, 3000);
});