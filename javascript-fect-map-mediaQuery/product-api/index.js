
//  https://fakestoreapi.com/carts


// fetch .then res

// function getProductData(){
//     fetch(` https://fakestoreapi.com/carts`).then((res)=>res.json()).then((res)=> console.log(res))
// }
// getProductData();

//fetch async await 

async function getProductData(){
    let res= await fetch(`https://fakestoreapi.com/products`);
    let data = await res.json();
    // console.log(data);
    displayData(data);
    return data;
}

getProductData();
let container = document.getElementById("container");


function displayData(data){

    data.forEach((e) => {
        
        let div = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", e.image);
    
    let title = document.createElement("h2");
    title.innerText= e.title;

    let price = document.createElement("h1");
    price.innerText= e.price;

    let category = document.createElement("h3");
    category.innerText= e.category;

    let description = document.createElement("p");
    description.innerText= e.description;

    div.append(image, title, price, category, description);
    container.append(div);

    });
    

}

