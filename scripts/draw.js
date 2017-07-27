function draw(s) {    //画草图
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    var width = canvas.width = window.innerWidth*0.94;
    var height = canvas.height = window.innerHeight*0.94;

    var r = 1;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(width / 10, height / 2);
    ctx.lineTo(9 * width / 10, height / 2);
    ctx.lineTo(9 * width / 10 - 10, height / 2 - 10);
    ctx.stroke();
    ctx.moveTo(width / 2, 9 * height / 10);
    ctx.lineTo(width / 2, height / 10);
    ctx.lineTo(width / 2 - 10, height / 10 + 10);
    ctx.stroke();

    for (i = -10; i <= 10; i += 0.005) {
        // var i=-5;
        var a = s.replace(/x\_/g, i);
        a = calculate(a);
        ctx.save();
        ctx.translate(width / 2, height / 2);
        ctx.translate(i * 50, -a * 50);
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

    }
}
// draw('sin(x_)/x_');

