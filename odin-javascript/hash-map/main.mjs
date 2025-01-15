import { HashMap } from "./HashMap.mjs";

const test = HashMap(); // or HashMap() if using a factory

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log(test);
console.log("Gets: ");
console.log(test.get("apple"));
console.log(test.get("nonexistent"));

console.log("Has: ");
console.log(test.has("apple"));
console.log(test.has("blah"));

console.log("Length: " + test.length());

console.log("Keys: " + test.keys());
console.log("Values: " + test.values());
console.log("Entries: " + JSON.stringify(test.entries()));

/* //overwrite stuff now
console.log("Overwrite!")
test.set("apple", "death");
test.set("banana", "me");
test.set("carrot", "cake");
console.log("Modified Length: " + test.length());
console.log("Modified Entries: " + JSON.stringify(test.entries())); */

console.log("Collision:");
test.set("moon", "silver");
test.set("road", "atlas");

console.log("Gets: ");
console.log(test.get("apple"));
console.log(test.get("dog"));
console.log(test.get("carrot"));
console.log(test.get("nonexistent"));

console.log("Has: ");
console.log(test.has("apple"));
console.log(test.has("blah"));

console.log("Length: " + test.length());

console.log("Keys: " + test.keys());
console.log("Values: " + test.values());
console.log("Entries: " + JSON.stringify(test.entries()));

test.set("road", "highway");
test.set("hello", "goodbye");
test.set("wilco", "band");
test.set("schlaf", "mutze");
console.log("Length: " + test.length());
console.log("Entries: " + JSON.stringify(test.entries()));
