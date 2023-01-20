// https://fakestoreapi.com/carts

// function getCartData(){
//     return fetch(`https://fakestoreapi.com/carts`).then((res) =>res.json()).then((res)=> console.log(res))
// }
// getCartData();
 
// fetch the data 
async function getCartData(){
    let res = await fetch(`https://fakestoreapi.com/carts`);
    let data = await res.json();
    console.log(data);
     displayData(data);
     return data;

}
getCartData();

// map your data 

let container = document.getElementById("container");

function displayData(data){
   data.forEach(e => {
    
    
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", "https://st.depositphotos.com/1005920/1832/i/600/depositphotos_18323389-stock-photo-shopping-cart-green-glossy-icon.jpg")
    img.setAttribute("id", "img");

    let date= document.createElement("p");
 

    let u= e.date.split("T");
    date.innerText=u[0];
    // console.log(u, "hello");

    let id = document.createElement("p");
    id.innerText = e.id;

    
    let userId = document.createElement("p");
    userId.innerText = e.userId;

    let products = document.createElement("p");
    products.innerText=e.products[0]
    // products.innerText = `hi${e.products.quantity}`;

    div.append(img, date, id, userId );

    container.append(div);
    });
}




