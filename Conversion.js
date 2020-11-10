let feet = 1;
let inch = 1/12 * feet;

let toFindFeet = 42 * inch;
console.log("a: 42 inches = " + toFindFeet + " feet.");

let length = 60;
let breadth = 40;
let areaOfOneRectPlotInFeet = length * breadth;
let areaOfOneRectPlotInAcre = areaOfOneRectPlotInFeet / 43560;

let areaOf25RectPlots = areaOfOneRectPlotInAcre * 25;

console.log("b: Area in feet: " + areaOfOneRectPlotInFeet + ",  in acres: " + areaOfOneRectPlotInAcre);
console.log("c: Area of 25 such plots: " + areaOf25RectPlots + " acres");