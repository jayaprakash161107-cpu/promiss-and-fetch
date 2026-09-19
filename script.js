//               Fetch Users Data from API using JavaScript


// 1.  .then() and .catch()



// const data = fetch("https://jsonplaceholder.typicode.com/users") // fetch representing a promis

// console.log(data)

// data .then((res) => res.json())     // .then methord is represent tha promis values,using json it give you array object.
// .then((data) => console.log(data))   // now console.log(data) using .then , this ia promis chaining methord
// .catch((error) => console.log("error")) // use .catch becase tha function rejects is gives a error





// 2.   async/await




//  async function fetchadd(){  //this is a synchoronus code await onlu  uses on Asynchoronus methord  so use async.
//    try{
//      const responds = await fetch("https://jsonplaceholder.typicode.com/users") //await represent resolve.
//     const data = await responds.json() //once fech resolve then it excute outhers. and using json it gives array object promis
//     console.log(data);                  
//    }catch(error){             //use try and catch.
//     console.log(error);

//    }
    
    
// }

// fetchadd()   //call tha function.