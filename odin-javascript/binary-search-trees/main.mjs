import { Tree } from "./Tree.mjs";

const arr1 = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const testTree = new Tree(arr1);

testTree.prettyPrint(testTree.root);
testTree.insert(testTree.root, 40);
testTree.prettyPrint(testTree.root);
testTree.insert(testTree.root, 300);
testTree.prettyPrint(testTree.root);
