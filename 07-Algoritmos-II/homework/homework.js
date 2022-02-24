// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;
  let cantidad = array.length;
  let valormedio = Math.floor(cantidad / 2);
  let pivot = array[valormedio];

  let array_I = [];
  let array_D = [];

  for (let i = 0; i < array.length; i++) {
    if (i != valormedio) {
      if (array[i] <= pivot) {
        array_I.push(array[i]);
      } else if (array[i] > pivot) {
        array_D.push(array[i]);
      }
    }
  }

  return quickSort(array_I).concat(pivot).concat(quickSort(array_D));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //Caso base
  if (array.length === 1) return array;

  let medio = Math.floor(array.length / 2);
  let array_I = array.slice(0, medio);
  let array_D = array.slice(medio);

  //Recursion
  return merge(mergeSort(array_I), mergeSort(array_D));
}

function merge(left, right) {
  //logica de comparacion

  let array_R = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      array_R.push(left[i]);
      i++;
    } else {
      array_R.push(right[j]);
      j++;
    }
  }
  return array_R.concat(left.slice(i)).concat(right.slice(j));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
