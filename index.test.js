const expect = require("unexpected");
const deepobj = require("./dist/deepobj.js");
const obj = { a: { b: { c: {} } } };

// define some basic actions

const get = (a, b) => a[b];
const set = n => (a, b) => (a[b] = n);
const del = (a, b) => delete a[b];

// Check if basic get works
console.log("testing GET EXISTING \n");
expect(deepobj(get, obj, "a.b.c"), "to be", obj.a.b.c);
console.log("testing GET NEW \n");
expect(deepobj(get, obj, "e.f.g"), "to be", undefined);

// Try setting deep values
// on existing properties
console.log("testing SET EXISTING \n");
deepobj(set(2), obj, "a.b.c");
expect(obj.a.b.c, "to be", 2);

// on new properties
console.log("testing SET NEW \n");
deepobj(set(10), obj, "h.j.k");
expect(obj.h.j.k, "to be", 10);

// Check if delete works
console.log("testing DELETE EXISTING \n");
deepobj(del, obj, "a.b.c");
expect(obj.a.b.c, "to be", undefined);

console.log("ALL TESTS PASSED");
