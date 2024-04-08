class Shape {
    _width: number = 0;
    _height: number = 0;
}

class Rectangle extends Shape {
    set width(value: number){
        this._width = value;
    }

    set height(value: number){
        this._height = value;
    }

    get width(): number { return this._width; }
    get height(): number { return this._height; }
}
class Square extends Shape {
    set width(value: number){
        this._width = value;
    }

    set height(value: number){
        this._height = value;
    }

    get width(): number { return this._width; }
    get height(): number { return this._height; }
}

const shape = new Rectangle();
shape._height = 100;
shape._width = 150;
console.log(shape);
