import { Node } from "./Node.mjs";

export class LinkedList {
  constructor(headNode = null) {
    this.headNode = headNode;
  }

  prepend(value) {
    let newNode = new Node(value);
    if (this.headNode === null) {
      this.headNode = newNode;
    } else {
      newNode.nextNode = this.headNode; //assigns the new node's pointer to the old headNode
      this.headNode = newNode; //assigns the newNode as the new headNode
    }
  }

  append(value) {
    if (this.headNode === null) this.prepend(value);
    else {
      const newNode = new Node(value, null);
      let tmp = this.headNode;
      while (tmp.nextNode != null) {
        tmp = tmp.nextNode;
      }
      tmp.nextNode = newNode;
    }
  }

  size() {
    let count = 0;
    let node = this.headNode;
    while (node) {
      count++;
      node = node.nextNode;
    }
    return count;
  }

  getHead() {
    return this.headNode.value;
  }

  getTail() {
    let lastNode = this.headNode;
    while (lastNode.nextNode != null) {
      lastNode = lastNode.nextNode;
    }
    return lastNode.value;
  }

  at(index) {
    let node = this.headNode;
    if (index > this.size()) {
      return "No node at this index";
    }
    for (let i = 0; i < index; i++) {
      node = node.nextNode;
    }
    return node.value;
  }

  pop() {
    let currentNode = this.headNode;
    let prevNode = null;
    while (currentNode.nextNode != null) {
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    if (currentNode == null) {
      return "Cannot delete";
    }
    prevNode.nextNode = currentNode.nextNode;
  }

  contains(value) {
    let currentNode = this.headNode;
    while (currentNode.nextNode != null) {
      if (currentNode.value === value) {
        return true;
      }
      return false;
    }
  }

  find(value) {
    let currentNode = this.headNode;
    let index = 0;
    while (currentNode.nextNode) {
      if (currentNode.value === value) {
        return index;
      }
      index++;
      currentNode = currentNode.nextNode;
    }
    //if(this.contains(value) === true){

    return null;
  } //returns the index of the node containing value, or null if not found.

  toString() {
    let tmp = this.headNode;
    let output = "";
    while (tmp) {
      output = output + "( " + tmp.value + " ) -> ";
      tmp = tmp.nextNode;
    }
    output = output + "null";
    return output;
  }

  insertAt(value, index) {
    let currentNode = this.headNode;
    let prevNode = null;
    let newNode = new Node(value);

    if (this.headNode === null || index === 0) return null;
    if (index + 1 > this.size()) {
      return "No node at this index";
    }

    for (let i = 0; i < index; i++) {
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    prevNode.nextNode = newNode;
    newNode.nextNode = currentNode;
  }

  removeAt(index) {
    let currentNode = this.headNode;
    let prevNode = null;
    let nextNode = null;
    if (index + 1 > this.size()) {
      return "No node at this index";
    }
    for (let i = 0; i < index; i++) {
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    prevNode.nextNode = currentNode.nextNode;
  }
}
