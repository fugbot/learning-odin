import { Node } from "./Node.mjs";
export class Tree {
  constructor(array) {
    array = this.sortArray(array);
    this.root = this.buildTree(array, 0, array.length - 1);
  }

  sortArray(array) {
    if (array.length === 0) return null;
    console.log("original: " + array);
    //sort array
    array = array.sort((a, b) => a - b);
    console.log("after sorting: " + array);
    //remove duplicates
    array = [...new Set(array)];
    console.log("Remove duplicates: " + array);
    return array;
  }

  buildTree(array, start, end) {
    //console.log(array);
    if (start > end) return null;
    let mid = Math.floor((start + end) / 2);

    let root = new Node(array[mid]);
    //create left subtree - calculate mid of left subarray and make it root of left subtree of main root
    root.left = this.buildTree(array, start, mid - 1);
    //create right subtree - calculate mid of right subarray and make it root of right subtree of main root
    root.right = this.buildTree(array, mid + 1, end);
    return root;
  }

  prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  insert(root, value) {
    if (root === null) {
      return new Node(value);
    }
    //duplicates not allowed
    if (root.data === value) {
      return root;
    }

    if (value < root.data) {
      root.left = this.insert(root.left, value);
    } else if (value > root.data) {
      root.right = this.insert(root.right, value);
    }
    return root;
  }

  deleteItem(value) {
    const getSuccessor = (current) => {
      current = current.right;
      while (current !== null && current.left !== null) {
        current = current.left;
      }
      return current;
    };

    const delNode = (root, value) => {
      //base case
      if (root === null) {
        return root;
      }

      //if key to be searched is in a subtree
      if (root.data > value) {
        root.left = delNode(root.left, value);
      } else if (root.data < value) {
        root.right = delNode(root.right, value);
      } else {
        //if root matches with given key

        //root has no children or only right child
        if (root.left === null) {
          return root.right;
        }

        //root only has left child
        if (root.right === null) {
          return root.left;
        }

        //both children present
        let successor = getSuccessor(root);
        root.data = successor.data;
        root.right = delNode(root.right, successor.key);
      }
      return root;
    };
    this.root = delNode(this.root, value);
  }

  find(root, value) {
    if (root === null || root.data === value) {
      return root;
    }
    //value is greater than root's value
    if (root.data < value) {
      return this.find(root.right, value);
    }
    //value smaller than root's value
    return this.find(root.left, value);
  }
}
