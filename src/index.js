//webpack looks for 'imports'
//It imports 'pageLoad' (a const defining a function)
//'pageLoad' has access to functions within its
//source file that it calls (i.e. renderItems())

//on the way, the console logs are returned in order
// 1: pageLoad's global console.log(s)
// 2: the console.log here "inside the..."
// 3: the console.logs inside the pageLoad function
// 4: the console.log here "this is after..."

//weboack compiles all this into a single main.js in the order that is presented here - hence the order of the console.logs

//So console.logs are returned as they happen extremely quickly and the order follows according to the order in this file. This happens while the code inside pageLoad() is running and is the reason why it's inner console.logs (and other code) is only executed a little while later.

import { pageLoad } from "./page-load";

console.log("inside the index.js");

pageLoad();

console.log("This is after the pageLoadEvent");
