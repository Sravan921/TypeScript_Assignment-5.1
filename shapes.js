"use strict";
//used in moduleExample
var Shapes;
(function (Shapes) {
    function Triangle() {
        console.log("Lets Draws a triangle");
    }
    Shapes.Triangle = Triangle;
    function Square() {
        console.log("Lets Draws a square");
    }
    Shapes.Square = Square;
})(Shapes = exports.Shapes || (exports.Shapes = {}));
