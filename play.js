document.getElementById("forPuzzle").innerHTML = `
<img
    id="puzzleImage"
    src="images/puzzle.png"
    style="
        width:90%;
        max-width:900px;
        margin-top:30px;
    "
>
`;

document.getElementById("hintBtn").onclick = function() {
    alert("힌트 버튼 성공!");
};