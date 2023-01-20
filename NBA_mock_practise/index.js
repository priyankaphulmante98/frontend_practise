async function getPlayers(){
    // let res = fetch("https://www.balldontlie.io/api/v1/players").then(res => res.json()).then(res => console.log(res));
    let res = await fetch("https://www.balldontlie.io/api/v1/players");
    let data = await res.json();
    // console.log(data);
    displayData(data.data)
    return data.data;
  }
  getPlayers();

  let container = document.getElementById("container");
  function displayData(data){
 
    container.innerHTML = null;

   data.forEach((e) => {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", "data:image/png;base64,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")
    div.append(img);

    let name = document.createElement("h2");
    name.innerText=e.first_name;

    let position = document.createElement("h3");
    position.innerText = e.position;

    let btn = document.createElement("button");
    btn.addEventListener("click", () => {
        handlepopup(e);
    });

    btn.innerText ="TEAM DETAILS";
    btn.style.cursor="pointer";



    div.append(img, name, position, btn);

    container.append(div);

   });
  }

  function handlepopup(playerData){
   
    document.querySelector(".modal").style.display="block";
    let close = document.querySelector(".close")
    close.addEventListener("click", handleClose);

    console.log(playerData, "playerData");
 
    const { first_name, last_name, position,
    team:{
        full_name, conference, division, abbreviation, city }, } = playerData;

        let name1 = (document.getElementById("name").innerText= `Name : ${first_name}`);
        let pos1 = (document.getElementById("position").innerText=`postiotn: ${position}`);
        let team1 = (document.getElementById("team").innerText=`Team:${full_name}`);
        let abbr1 =(document.getElementById("abbr").innerText=`Abbr: ${abbreviation}`)
        let confer1=(document.getElementById("conference").innerText =`Conference: ${conference}`)
        let div = (document.getElementById("division").innerText = `Division:${division}`)
        let City1 = (document.getElementById("city").innerText = `City:${city}`)
        
         function handleClose(){
            document.querySelector(".modal").style.display="none";
         }
  }

  // input part 

//   let searchbtn = document.getElementById("searchbtn");
//   searchbtn.addEventListener("click", handleSearch);

  let input = document.getElementById("serach");
  input.addEventListener("input", handleSearch)

  async function handleSearch(){
    let text= document.getElementById("serach").value;
    console.log(text);

    let data = await getPlayers();
    // console.log(data);

     //filter 
     let seracheddata = data.filter((e) => {
     let name = e.first_name.toLowerCase();

     let serachtext=text.toLowerCase()
     return name.includes(serachtext);

  });
  console.log(seracheddata, "search");
  displayData(seracheddata)
}

// console.log(window);