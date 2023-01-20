// Closure is a combination of function bundled together with it's lexical environment. 

// It is a function that references variables in the outer scope from it's inner scope

// To know more about Closures we need to know about Lexical scope.

// # What is Lexical scope?

// A Lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. 

// But the opposite is not true; the variables defined inside a function will not be accessible outside that function.

// Let's see an example.

//  //closure example 

// function outer(){
//     var name="priya"  //............global scope 
//     function inner(){
//         console.log(name);  //..............local scope
//     }
//     inner()
// }
// outer()


// Why do we use Closures?

// Closures makes it possible for a function to have "private" variables. JavaScript closure is used to control what is and isn't in scope in a particular function, along with which variables are shared between sibling functions in the same containing scope.

// function outer() {
//     var name = 'priya';
//     function inner() {
//       console.log(name);
//     }
//     return inner();
//   }
  
//   var outer = outer();
//   outer()                 //...............priya
// //   console.log(outer);


// Closure Scope chain

// Closures have three scopes :

// 1] Local Scope (Own scope)
// 2] Functions Scope (outer scope)
// 3] Global Scope



// 1. What are the advantages of Closures?


1) hey let you associate data (the lexical environment) with a function that operates on that data. 
2) They provide data encapsulation.
3) They allow you to attach variables to an execution context.
4) Variables in closures can help you maintain a state that you can use later.
5)  They provide data encapsulation. They help remove redundant code.