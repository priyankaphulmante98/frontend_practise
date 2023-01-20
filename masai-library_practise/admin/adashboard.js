
let form = document.getElementById("form");
form.addEventListener("submit" , addfunction);

function addfunction(e){
e.preventDefault()

    let obj = {
              image_url:form.img.value,
              book_name:form.name.value,
              author: form.author.value,
              genre:form.genre.value,
              edition: form.edition.value,
              publisher: form.publisher.value,
              cost: form.cost.value,
              borrowed: false,
        };

    // alert("obj are added");
    // console.log(obj)

    postData(obj);
    }
    async function postData(pdata){
    let res = await fetch(`http://localhost:3004/products`,{
    method:"POST",
    body:JSON.stringify(pdata),
    headers:{
             "Content-Type":"application/json",
            },
            });
    let data = await res.json();
    console.log(data, "postData");

    }

    async function getData(){
    let res = await fetch("http://localhost:3004/product")
    let data = await res.json();
    displayData(data);
    console.log(data, "data fetched");

}
getData();



function displayData(data){
    // console.log(data);
    document.querySelector("tbody").innerHTML = null;

    data.forEach((e)=> {

        let tr = document.createElement("tr")

        let td1 = document.getElementById("td");
        let img = document.createElement("img");
        img.setAttribute("src", e.image_url);
        td1.append(img);
    

        let td2 = document.createElement("td");
        td2.innerText = e.book_name;

        let td3 = document.createElement("td");
        td3.innerText = e.author;

        let td4 = document.createElement("td");
        td4.innerText = e.genre;

        let td5 = document.createElement("td")
        td5.innerText = e.edition;

        let td6 = document.createElement("td")
        td6.innerText = e.publisher;

        let td7 = document.createElement("td");
        td7.innerText = e.cost;

        let td8 = document.createElement("td");
        td8.innerText = e.borrowed;

        let td9 = document.createElement("td");
    
        let updbtn = document.createElement("button");
        updbtn.innerText = "update";
        updbtn.style.color="green";
        updbtn.style.cursor="pointer"
        updbtn.addEventListener("click", function() {
            handleupdate(e.id);
        });

        td9.append(updbtn);

        let td10 = document.createElement("td");

        let del = dpcument.createElement("button");
        del.innerText="delete";
        del.style.color = "red";
        del.addEventListener("click", function(){
            handledelete(e.id);
        });

        td10.append(del);

        tr.append(td1, td2, td3, td4, td5, td5, td6, td7,td8, td9, td10);

        document.querySelector("tbody").append(tr);
     
       });
       window.location.reload();

    }  




