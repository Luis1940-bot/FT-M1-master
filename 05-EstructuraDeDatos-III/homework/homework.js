// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  if (value > this.value) {
    //a la derecha
    if (!this.right) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else {
    //a la izquierda
    if (!this.left) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
};
BinarySearchTree.prototype.contains = function (value) {
  if (value === this.value) return true;

  if (value > this.value) {
    if (!this.right) {
      return false;
    } else {
      return this.right.contains(value);
    }
  } else if (value < this.value) {
    if (!this.left) {
      return false;
    } else {
      return this.left.contains(value);
    }
  }
};
BinarySearchTree.prototype.size = function () {
  //Nodo hoja (BST)
  if (!this.left && !this.right) return 1;
  //Nodo con un solo hijo
  if (!this.left) return 1 + this.right.size();
  if (!this.right) return 1 + this.left.size();

  //Nodo con más hijos
  return 1 + this.left.size() + this.right.size();
};

BinarySearchTree.prototype.depthFirstForEach = function (fn, order) {
  ///recorremos por nodos

  switch (order) {
    case "pre-order":
      ///order = pre-order
      /// value -> left -> right
      fn(this.value);
      if (this.left) this.left.depthFirstForEach(fn, order);
      if (this.right) this.right.depthFirstForEach(fn, order);
      break;
    case "post-order":
      ///order = post-order
      ///left->right->value
      if (this.left) this.left.depthFirstForEach(fn, order);
      if (this.right) this.right.depthFirstForEach(fn, order);
      fn(this.value);
      break;

    default:
      ///order = in-order
      ///left ->value->right
      if (this.left) this.left.depthFirstForEach(fn, order);
      fn(this.value);
      if (this.right) this.right.depthFirstForEach(fn, order);
      break;
  }
};
BinarySearchTree.prototype.breadthFirstForEach = function (fn, array = []) {
  ///recorremos por niveles
  fn(this.value);
  if (this.left) array.push(this.left);
  if (this.right) array.push(this.right);

  if (array.length > 0) {
    // paso al siguiente d emi lista
    let next = array[0];
    array.shift();
    next.breadthFirstForEach(fn, array);
  }
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
