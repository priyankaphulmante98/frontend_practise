//  let obj ={
//     id:1,
//     name:" priya", 
//     age:24,
//     above18: true

//  }
// //  console.log(obj);
//  let update  = {...obj, above18:!obj.above18, age:18 }


// //  console.log(update);
// //  console.log(!!obj.above18);
//  if(obj.age>18)
// {
//     console.log("you can drive")
// }else{
//     console.log("not eligible")
// }

// //    ternaryy
// console.log(obj.age>18?"you can drive" :"not eligible")


// //  crud  opration 
// create-- creating or adding or posting  ==>POST MEthod
// read -- getting DataTransfer, or fetching  ==>GET MEthod
// updte-  updating,changing specific DataTransfer, or particular data  ==>PUT /PATCH method  
// Delete --  deleting or removing  ==>DElete method




// //GET using fetch
// let url=>"http:localhost:3000"

// fetch(url,{
//     method:"GET"
// }).then(res=>res.json()).then(res=>console.log(res))
// or
// let res= await fetch(url)
//  let data= await res.json()
//  console.log(data)

//  //post  using fetch
//  let user ="login form object"
//  fetch("http:localhost:3000",{
//     method:"POST",
//     body:JSON.stringify(user),
//     headers:{
//         "Content-Type":"application/json"
//     }
//  })


// //  update
// fetch(`http:lkocalhost:3000/:${id}`,{
//     method:"PUT/PATCH",
//     body:JSON.stringify(update),
//     headers:{
//         "Content-Type":"application/json"
//     }
// })
// // delete

// fetch(`http:lkocalhost:3000/:${id}`,{
//     method:"DELETE"
// })
 
let arr=[2,4,67,3,46]
let user=[{
    name:"abhi",
    genre:"history",
    age:14
},
{
    name:"priya",
    genre:"history",

    age:24
},
{
    name:"biresh",
    genre:"science",

    age:17
}]

// higer order function --> 
//these are the  callback functions namely MAP FILTER,AND REDUCE.




// foreach
// let arr3=arr.forEach(e => console.log(e));
// console.log(arr3)

// //MAP
// let newarray=arr.map((e)=>{ return e*2})
// let arr2=arr.map(e=>e)
// // console.log(newarray)
// // console.log(arr2)
// let newuser=user.filter(e=>e.genre=="history")
// // console.log(newuser)

// let sum = arr.reduce((acc,e)=>acc+e,0)
//  // (accumulator/store,element/obj)=>logic, initial value;

// // console.log((sum,user,"sum"))



// let arrs=[1,3,2,4,6,5,3,4]
// let sortedarr=[...arrs].sort((a,b)=>a-b)
// console.log(arrs)   // same
// console.log(sortedarr) //sortedone
// // ?




