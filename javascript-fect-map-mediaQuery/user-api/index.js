// https://fakestoreapi.com/users

function getData(){
     return fetch(`https://fakestoreapi.com/users`).then((res) => res.json()).then((res) =>{ displayData(res) 
      console.log(res)});
     
    
    
}

 getData();
// id:20,
// email:String,
// username:String,
// password:String,
// name:{
//     firstname:String,
//     lastname:String
//     },
// address:{
// city:String,
// street:String,
// number:Number,
// zipcode:String,
// geolocation:{
//     lat:String,
//     long:String
//     }
// },
phone:String 
let container = document.getElementById("container");

function displayData(res){

    res.forEach(e => {
    
    let div = document.createElement("div");
        
    let img = document.createElement("img");
    img.setAttribute("src", "data:image/jpeg;base64,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");

    let name = document.createElement("h2");
    // name.innerText=e.name.firstname+" "+ e.name.lastname;
    name.innerText=`${e.name.firstname} ${e.name.lastname}`

    let address = document.createElement("h2");
    // address.innerText=`${e.address.city} ${e.address.street}, `
    // address.innerText=`${e.address.number} ${e.address.zipcode}`
    address.innerText=`${e.address.geolocation.lat} ${e.address.geolocation.long}`

    let username = document.createElement("h2");
    username.innerText=e.username;

    let password = document.createElement("h2");
    password.innerText=e.password;

    let email = document.createElement("h2");
   email.innerText=e.email;

    let id = document.createElement("h2");
   id.innerText=e.id;
    
    let phone = document.createElement("h2");
    phone.innerText=e.phone;
    
    div.append(img, name, username, password, email, id, phone, address);
    container.append(div);

});

}

