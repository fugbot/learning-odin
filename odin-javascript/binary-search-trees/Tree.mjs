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
    const getSuccessor = (node) => {
      let current = node;
      while (current.left !== null) {
        current = current.left;
      }
      return current.data;
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
        root.data = getSuccessor(root.right);
        root.right = delNode(root.right, root.data);
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

  recursiveLevelOrder(callback) {
    //visit all nodes in level before traversing to next level
    //discovered node
    //queue FIFO - store address of discovered node in queue
    //print node > enqueue its child nodes
    //continue down queue
    if (typeof callback !== "function") {
      throw new Error("Callback function is required.");
    }

    //let queue = [];
    let result = [];
    const traverse = (node) => {
      let nextNode = [];
      for (let i of node) {
        result.push(i.data);
        if (i.left) {
          nextNode.push(i.left);
        }
        if (i.right) {
          nextNode.push(i.right);
        }
        traverse(nextNode);
      }
    };
    traverse([this.root]);
    callback(result);
  }

  inOrder() {
    const result = [];
    const traverse = (node) => {
      if (node !== null) {
        traverse(node.left);
        result.push(node.data);
        traverse(node.right);
      }
    };
    traverse(this.root);
    return result;
  }

  preOrder() {
    const result = [];
    const traverse = (node) => {
      if (node === null) return;
      result.push(node.data);
      traverse(node.left);
      traverse(node.right);
    };
    traverse(this.root);
    return result;
  }
  postOrder() {
    const result = [];
    const traverse = (node) => {
      if (node === null) return;
      traverse(node.left);
      traverse(node.right);
      result.push(node.data);
    };
    traverse(this.root);
    return result;
  }
}
