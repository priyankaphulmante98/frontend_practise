 let obj = {
    name:"priya",
    age:24,
    healthy: true
 }

//  this.users = [
//    { id: '1', Book_Name: 'Computer Architecture', Category: 'Computers', Price: 125.60 },
//    { id: '2', Book_Name: 'Asp.Net 4 Blue Book', Category: 'Programming', Price: 56.00 },
//    { id: '3', Book_Name: 'Popular Science', Category: 'Science', Price: 210.40 }
// ]

//  let updateobj= {...obj, name:"shri", age:24, }

// // let updateobj= {...obj, healthy:!true }
//  console.log(updateobj);

// // using simple method

// // if(obj.age>18){
// //     console.log("you can married");

// // }else{
// //     console.log("you are not elligible");
// // }

// //ternary operator
// // console.log(obj.age>18 ? "you can married": "You are not elligible");

// 1] How do you do CRUD operations?
//   CRUD refers to the four basic operations a software application should be able to perform –
//   Create, Read, Update, and Delete. In such apps, users must be able to
//   create data, have access to the data in the UI by reading the data,
//   update or edit the data, and delete the data.

// //Crud operation ==>

// // 1] create  ==> creating or adding or posting data ==> POST method .
// // 2] read ==>  getting DataTransfer, or fetching  ==> GET method.
// // 3] update ==>  updating,changing specific DataTransfer, or particular data  ==> PUT /PATCH method.
// // 4] delete ==>   deleting or removing  data ==> DELETE METHod.

// // //1] GET using fetch METHOD ==>  GET
//  let url = "http:localhost:3000"

//  fetch(url,{
//    method:"GET"
//  }).then(res => res.json()).then(res => console.log(res))

//  //or

//  async  function hellofunction(){
//    let res = await fetch(url)
//    let data = await res.json()
//    console.log(data);
//  }

// //  let res = await fetch(url)
// //  let data = await res.json()
// //  console.log(data);

// //2] post using fetch  ==>  POST

// let user = "login from object"
// fetch("http:localhost:3000",{
//    method:"POST",
//    body:JSON.stringify(user),
//    headers:{
//       "Content-Type": "application/json"
//    }

// })

//  // 3] update  method ==>  PUT /PATCH

//  fetch(`http:localhost:3000/:${id}`,{
//    method:"PUT",
//    body:JSON.stringify(update),
//    headers:{
//       "Content-Type": "application/json"
//    }
//  })

// // fetch(`http:localhost:3000:/${id}`,{
// //    method:"PATCH",
// //    body:JSON.stringify(update),
// //    headers:{
// //       "Content-Type":"application/json"
// //    }
// // })

//  //4] delete Method ==> DELETE METHOD

//  fetch(`http:localhost:3000:/${id}`,{
//    method:"DELETE",

//  })

let user = [
    {
        name:"priya",
        genre:"science",
        age:24
    },
    {
        name:"priti",
        genre:"history",
        age:22
    },
    {
        name:"shri",
        genre:"science",
        age:24
    },
    {
        name:"gano",
        genre:"history",
        age:19
    }
]

// //forEach

// // let arr3 = arr.forEach(e => console.log(e));
// // console.log(arr3);
// // o/p==>
// // 1
// // 2
// // 3
// // 4
// // 5
// // 6
// // NaN

// let arr2 =arr.map(e => e)
// console.log(arr2)
// // [ 1, 2, 3, 4, 5, 6 ]

//filter

// let newuser = users.filter(e => e.genre === "science")
// console.log(newuser);

// let newuser = users.filter(e => e.genre ==="history");
// console.log(newuser);

// [
//     { name: 'priti', genre: 'history', age: 22 },
//     { name: 'gano', genre: 'history', age: 19 }
//   ]

// let kaya = users.filter(e => e.age===24);
// console.log(kaya);

//reduce ==>
// let arr = [1,2,3,4,5,6]

// let sum = arr.reduce((acc,e) => acc+e,0)
// console.log(sum, user, "sum")
//accumulator/store,element/obj)=>logic, initial value

// 21 [
//     { name: 'priya', genre: 'science', age: 24 },
//     { name: 'priti', genre: 'history', age: 22 },
//     { name: 'shri', genre: 'science', age: 24 },
//     { name: 'gano', genre: 'history', age: 19 }
//   ] sum

// let arr = [1,2,3,4,5,6];  //21

// let sum = arr.reduce((acc, e) => acc+e, 0)
// console.log(sum);  //21

// let gola = arr.reduce((acc,e) => acc+e,0)
// console.log(gola);

//let arr = [1,2,3,4,5,6,7,8,9,76,5,33,5,24,4,2, 44]

//  console.log(arr.sort());

// //  [
// //     1,  2, 2, 24, 3, 33, 4,
// //     4, 44, 5,  5, 5,  6, 7,
// //    76,  8, 9
// //  ]

// let sortedarr =[...arr].sort((a,b) => a-b)
// console.log(arr)  //same
// console.log(sortedarr) //sortedone
// // [
// //     1, 2,  3, 4,  5, 6,  7,
// //     8, 9, 76, 5, 33, 5, 24,
// //     4, 2, 44
// //   ]
// //   [
// //      1,  2,  2, 3, 4, 4,  5,
// //      5,  5,  6, 7, 8, 9, 24,
// //     33, 44, 76
// //   ]

// let user = [
//     {
//         name:"priya",
//         genre:"science",
//         age:24
//     },
//     {
//         name:"priti",
//         genre:"history",
//         age:22
//     },
//     {
//         name:"ssss",
//         genre:"science",
//         age:24
//     },
//     {
//         name:"gano",
//         genre:"history",
//         age:19
//     }
// ]

// let arr =[1,2,3,4,5,6]

//forEach()

// let kaya  = user.forEach((e => console.log(e)));
// console.log(kaya);

// let maya = arr.forEach((e => console.log(e)))
// console.log(maya)

//map ==>

// let arr1 = arr.map((e => e))
// console.log(arr1)

// let arr2 = arr.map((e => e));
// console.log(arr2)
// [ 1, 2, 3, 4, 5, 6 ]

//filteter

// let display = user.filter((e) => e.age===24)
// console.log(display);

//reduce

//  let laya = user.reduce((acc, e) => acc+e, 0);
//  console.log(laya, user);

// higer order function -->
//these are the  callback functions namely MAP FILTER,AND REDUCE.

// ternaryy ==>
// console.log(obj.age>18?"you can drive" :"not eligible")

// let url ="https://www.balldontlie.io/api/v1/games";

// let kaya = user.forEach((e => console.log(e)));
// console.log(kaya);

//  async function players(){
//     let res = await fetch("https://www.balldontlie.io/api/v1/games");
//     let data = await res.json();
//     console.log(data);
//  }
//  players()
// async function players(){
//     let res = await fetch("https://www.balldontlie.io/api/v1/games");
//     let data = await res.json();
//     console.log(data);
// }
// players();

// function data(){
//     let res = fetch("https://www.balldontlie.io/api/v1/games").then(res => res.json()).then(res => console.log(res));
// }
// data();

// function data(){
//     res = fetch("https://www.balldontlie.io/api/v1/games").then(res => res.json()).then(res => console.log(res));

// } data();

// let name="priyanaka";
// console.log(name.includes("shri"));
// function getdata(){

//     let  arr=[1,2,3,4,46]

// return arr
// }

// function fetch(){
// let data=getdata()
// console.log(data)
// }

// fetch()

// async function call(){
//     let res= await fetch("https://reqres.in/api/login");
//     let data = await res.json();
//     console.log(data);
// }
// call();

let data = [
  {
    name: "shridhar",
    date: "2022-11-12t0000",
    products: [
      { prodid: 1, quantiry: 2 },
      { prodid: 1, quantiry: 2 },
      { prodid: 1, quantiry: 2 }
    ]
  },
  {
    name: "shridhar",
    date: "2022-11-12t90909090t90080",
    products: [
      { prodid: 1, quantiry: 2 },
      { prodid: 1, quantiry: 4 },
      { prodid: 1, quantiry: 32 }
    ]
  }
];



data.map((e,i)=>{
    console.log("name-",e.name)
    let d=e.date.split("t")[0]

    console.log("date-",d)
    let arr=e.products
   for(let j=0;j<arr.length;j++){
    console.log(arr[j].quantiry)
   }

})

