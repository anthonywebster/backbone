function Animal (edad) {
  this.edad = edad;
}
 
Animal.prototype.crecer = function () {
  this.edad = this.edad + 1;
  return this.edad;
};
 
var iris = new Animal(3);

function Felino () {
}
 
Felino.prototype = new Animal(3);

Felino.prototype.constructor = Felino;
console.log(Felino.constructor());
 
// Felino.prototype.maullar = function () {
//   console.log('meowwwww');
// };
 
// var iris = new Felino();
// iris.crecer();
// iris.maullar();