// resolve estos ejercicios usando recursión

function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)

  if (n > -1 && n < 2) {
    return 1;
  } else if (n < 0) {
    return 0;
  }
  return n * nFactorial(n - 1);
}

function nFibonacci(n) {
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  return nFibonacci(n - 1) + nFibonacci(n - 2);
}

// Implementa la clase Queue
// enqueue:   Agrega un valor a la queue.   Respeta el orden existente.
// dequeue:   Remueve un valor de la queue.   Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size:   Devuelve el número de elementos que contiene la queue.

function Queue() {
  this.queue = [];
}
Queue.prototype.enqueue = function enqueue(arg) {
  return this.queue.push(arg);
};
Queue.prototype.dequeue = function dequeue(arg) {
  return this.queue.shift(arg);
};
Queue.prototype.size = function size(arg) {
  return this.queue.length;
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};
