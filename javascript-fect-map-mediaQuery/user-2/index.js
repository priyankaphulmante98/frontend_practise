// https://fakestoreapi.com/products
async function getData(){
    let res = await fetch(`https://fakestoreapi.com/products`)
    let data = await res.json();
    console.log(data)
    await new Promise(resolve => 
        setTimeout(resolve, 4000))
     console.log('hello')

    }
    getData()
  
    
