// resolve estos ejercicios usando recursión

// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
  this.head = null;
  this._length = 0;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (value) {
  //crear nodo
  let newNode = new Node(value); //instanciar pasando un valor
  let current = this.head;

  ///lista vacia
  if (!current) {
    this.head = newNode; //le cargo el nodo al head
    this._length++;
    return newNode;
  }

  while (current.next) {
    current = current.next;
  }
  //llegué al final de la lista
  current.next = newNode;
  this._length++;
  // return newNode;
};

LinkedList.prototype.remove = function (value) {
  if (this.head === null) return null;
  var valor_actual;
  if (this.head.next === null) {
    valor_actual = this.head.value;
    this.head = null;
    this._length--;
  } else {
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    valor_actual = current.next.value;
    current.next = null;
  }
  return valor_actual;
};

LinkedList.prototype.search = function (arg) {
  if (this.head === null) return null;
  let current = this.head;
  while (current) {
    if (typeof arg === "function") {
      if (arg(current.value)) {
        return current.value;
      }
    } else {
      if (current.value === arg) {
        return arg;
      }
    }

    current = current.next;
  }
  return null;
};

// Hash Table
// Una hash table contiene un arreglo de "contenedores" donde puede guardar información.
// Para guardar un valor asociado a una key (string):
//    - Correr la key a través de una función hash para transformarla a un número entero.
//    - Usar ese número como índice para ver en cuál contenedor guardarás el valor.
// Para buscar el valor por su key:
//    - Correr la key por la función hash para conseguir el número.
//    - Usar el número para buscar el contenedor donde está el valor.
//    - Devolver el valor.

function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}

HashTable.prototype.hash = function (key) {
  if (!key.length) return null;
  var acum = 0;
  for (let index = 0; index < key.length; index++) {
    acum = acum + key.charCodeAt(index);
  }
  return acum % this.numBuckets;
};
HashTable.prototype.set = function (key, value) {
  if (typeof key != "string") throw new TypeError("Keys must be strings");
  var codigo = this.hash(key);
  if (!this.buckets[codigo]) {
    this.buckets[codigo] = {};
  }
  this.buckets[codigo][key] = value;
};
HashTable.prototype.get = function (key) {
  var posicion = this.hash(key);
  return this.buckets[posicion][key];
};
HashTable.prototype.hasKey = function (key) {
  var bool = this.hash(key);
  return !!this.buckets[bool][key]; //"!!"  da el valor booleano
  // return this.buckets[bool].hasOwnProperty(key)
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
