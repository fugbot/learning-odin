import { LinkedList } from "./LinkedList.mjs";
import { Node } from "./Node.mjs";

let list = new LinkedList();
list.prepend(5);
list.prepend(3);
list.prepend(4);
list.append(2);
list.append(8);
//console.log(list.head.next.data);
console.log("Size: " + list.size());
console.log("Head: " + list.getHead());
console.log("Tail: " + list.getTail());
console.log("At index 9: " + list.at(9));
console.log("At index 2: " + list.at(2));
//console.log(list);
console.log(list.toString());
console.log("Contains 4 value: " + list.contains(4));
console.log("Contains 19 value: " + list.contains(19));

console.log("Value of 5 located at index: " + list.find(5));
console.log("Value of 19 located at index: " + list.find(19));

// console.log(list.toString());
// console.log("Insert 20 at index 3: ");
// list.insertAt(20, 3);
// console.log(list.toString());

// console.log(list.toString());
// console.log("Insert hello at index 0: ");
// list.insertAt("hello", 0);

console.log(list.toString());
console.log("Remove at index 2");
list.removeAt(2);
console.log(list.toString());

// //delete last
// list.pop();
// console.log(list.toString());

// list.pop();
// console.log(list.toString());

// const list2 = new LinkedList();

// list2.append("dog");
// list2.append("cat");
// list2.append("parrot");
// list2.append("hamster");
// list2.append("snake");
// list2.append("turtle");

// console.log("Size: " + list2.size());
// console.log("Head: " + list2.getHead());
// console.log("Tail: " + list2.getTail());
// console.log("At index 9: " + list2.at(9));
// console.log("At index 2: " + list2.at(2));
// console.log(list2.toString());
