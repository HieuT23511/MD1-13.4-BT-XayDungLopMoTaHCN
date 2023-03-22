class creatRectangle {
    x;
    y;
    width;
    height;

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    randomColor(){
        let red = Math.random()*255;
        let green = Math.random()*255;
        let blue = Math.random()*255;
        return `rgb(${red},${blue},${green})`
    }

    getDrawRec() {
        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.randomColor();
        ctx.fill();
        ctx.closePath();
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return (this.height + this.width) * 2
    }
}

let inputRectangle = new creatRectangle(100, 100, 200, 100);
inputRectangle.getDrawRec();
inputRectangle.getArea();
inputRectangle.getPerimeter();
document.getElementById('result').innerHTML = `The Rectangle with width = ${inputRectangle.width} and height = ${inputRectangle.height} have: <br>
The Area = ${inputRectangle.getArea()}. <br>
The Perimeter = ${inputRectangle.getPerimeter()}.`
