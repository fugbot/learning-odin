import { Tree } from "./Tree.mjs";

const arr1 = [1, 7, 4, 21, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const testTree = new Tree(arr1);

//testTree.prettyPrint(testTree.root);
testTree.insert(testTree.root, 40);
//testTree.prettyPrint(testTree.root);
testTree.insert(testTree.root, 300);
testTree.prettyPrint(testTree.root);

testTree.deleteItem(40);
testTree.prettyPrint(testTree.root);
testTree.deleteItem(4);
testTree.prettyPrint(testTree.root);
testTree.deleteItem(324);
testTree.prettyPrint(testTree.root);

console.log(testTree.find(testTree.root, 7) !== null ? "Found" : "Not Found");
console.log(testTree.find(testTree.root, 4) !== null ? "Found" : "Not Found");

testTree.recursiveLevelOrder((data) => console.log(data));
console.log("inorder: " + testTree.inOrder());
console.log("preorder: " + testTree.preOrder());
console.log("postorder: " + testTree.postOrder());
