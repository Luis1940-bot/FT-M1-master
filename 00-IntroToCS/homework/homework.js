function BinarioADecimal(num) {
  // tu codigo aca
  var suma = 0;
  var exponente = 0;
  for (let index = num.toString().length - 1; index >= 0; index--) {
    var caracter = num.toString().substr(index, 1);

    suma = suma + caracter * Math.pow(2, exponente);
    exponente++;
  }
  return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
  var arreglo = [];
  var division = num;
  while (division >= 1) {
    arreglo.unshift(division % 2);

    division = Math.trunc(division / 2);

    //console.log(division)
  }
  return arreglo.join("");
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
