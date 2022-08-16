var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
var q = 0;
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
    q = document.getElementById("shift").value;

    canvas.style.backgroundColor = `hsl(${huel+(q*1)}, ${100-k}%, 67%)`;
    ctx.fillStyle = `hsl(${huel+(q*0)}, ${100-k}%, 33%)`;

    for(var i = 0; i < matrix.length; i++) {
        var cube = matrix[i];
        for(var j = 0; j < cube.length; j++) {
            var rectData = {
                "x": i,
                "y": j,
                "width": 1,
                "height": 1
                };
           if (cube[j] == 1) {
            ctx.beginPath();
            ctx.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
            ctx.closePath();
           }
        }
    }

    huel = Math.floor(Math.random() * (360));
}

function pattern() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    matrix = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ]
    for(var i = 0; i < matrix.length; i++) {
        var cube = matrix[i];
        for(var j = 0; j < cube.length; j++) {
           var x = Math.random()
           if (x < .5) {
            cube[j] = 1
           }
        }
    }
    for(var i = 0; i < matrix.length; i++) {
        var cube = matrix[i];
        for(var j = 0; j < cube.length; j++) {
            var rectData = {
                "x": i,
                "y": j,
                "width": 1,
                "height": 1
                };
           if (cube[j] == 1) {
            ctx.beginPath();
            ctx.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
            ctx.closePath();
           }
        }
    }
    console.log(matrix);
}