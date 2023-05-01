class Shape {
    constructor (){
        this.color = "white";
        
    }
    setColor(newColor) {
        this.color = newColor;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}


class Square extends Shape{
    render() {
        return `<rect width="120" height="120" x="90" y="40" fill="${this.color}" />`
    }
}


module.exports = { Triangle, Circle, Square }