var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
var i = 0;
var huel = 0;
var k = 0;

var matrix = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
]

document.getElementById("hue").addEventListener("input", function() {
    huel = document.getElementById("hue").value;
});

 document.getElementById("brightness").addEventListener("input", function() {
    k = document.getElementById("brightness").value;
});

document.getElementById("button2").onclick = function() {
    document.getElementById("button1").click();
    document.getElementById("button3").click();
};

document.getElementById("button1").onclick = function() {colors()};
document.getElementById("button3").onclick = function() {pattern()};

function colors() {
    i = document.getElementById("shift").value;

    canvas.style.backgroundColor = `hsl(${huel+(i*3)}, ${100-k}%, 33%)`;

    huel = Math.floor(Math.random() * (360));
}

function pattern() {
    console.log(matrix)
}