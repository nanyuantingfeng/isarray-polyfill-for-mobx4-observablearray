# Fix Array.isArray(IObservableArray) return `false` at mobx@4.x
 

[array-limitations-in-mobx-4-and-below](https://mobx.js.org/refguide/array.html#array-limitations-in-mobx-4-and-below)


Array limitations in MobX 4 and below
Due to limitations of native arrays in ES5 observable.array will create a faux-array (array-like object) instead of a real array. In practice, these arrays work just as fine as native arrays and all native methods are supported, including index assignments, up-to and including the length of the array.

Bear in mind however that Array.isArray(observable([])) will yield false, which some native array manipulation methods require and which some external libraries may also require. E.g. [].concat(observable([])) will not work as expected since the native array concat method expects the test to return true. So whenever you need to pass an observable array to an external library or use the observable array as an argument to native array manipulation methods, you should create a shallow copy by using array.slice(), which will cause Array.isArray(observable([]).slice()) to yield true.

