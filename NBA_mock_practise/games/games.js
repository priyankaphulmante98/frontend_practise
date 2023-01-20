let conatainer = document.getElementById("container");
//fetch the data first 
  async function gamesData(){
    let res = await fetch("https://www.balldontlie.io/api/v1/games");
    let data = await res.json();
    // console.log(data.data[0]);
    displayData(data.data)

 }
 gamesData();

 function displayData(arr){
   
    container.innerHTML = null;
console.log(arr)
    arr.forEach((e) => {

      

    let box1 = document.createElement("div");
    box1.setAttribute("id" , box1);

    let img1 = document.createElement("img");
    img1.setAttribute("src", "https://pbs.twimg.com/media/Fc8hAgUagAA8NNH?format=jpg&name=900x900");



     let head =document.createElement("div")
     head.setAttribute("class","headname")
    let h2 = document.createElement("h2");
    let sp1 = document.createElement("span");
    let res = e.home_team_score > e.visitor_team_score ? "WON" : "LOST";
    let resColor=res=="WON"?true:false
    sp1.innerText = res 
    h2.innerText=`${e.home_team.full_name}`
    
   
    sp1.style.color=resColor?"green":"red";
    head.append(h2,sp1)
   
    let Date1= document.createElement("p");
    let d1 = e.date.split("T");
    Date1.innerText=`Date:${d1[0]}`

    let season = document.createElement("p");
    season.innerText=`Season:${e.season}`

    let Status = document.createElement("p");
    Status.innerText=`Status:${e.status}`

    let HomeTeam_Score = document.createElement("P");
    HomeTeam_Score.innerText=` Home Team Score: ${e.home_team_score}`

    let Division=document.createElement("p")
    Division.innerText=`Division: ${e.home_team.division}`

    box1.append(img1,  head, Date1, season, Status, HomeTeam_Score, Division)


  //box2  start 
        
    let box2 = document.createElement("div");
    box2.setAttribute("id", box2);


    let img2 = document.createElement("img");
    img2.setAttribute("src", "https://pbs.twimg.com/media/Fc8hAgUagAA8NNH?format=jpg&name=900x900");



  let h2div = document.createElement("div")
  h2div.setAttribute("class","headname")

    let h2tag=document.createElement("h2");
    let sp2 = document.createElement("span");
    
   
    sp2.innerText = res == "WON" ? "LOST" : "WON";
    h2tag.innerText=`${e.visitor_team.full_name} `
    sp2.style.color= !resColor?"green":"red";
    h2div.append(h2tag,sp2)
 
    let Date2 = document.createElement("p");
    let d2=e.date.split("T");
    Date2.innerText=`Date: ${d2[0]}`

    let Season2 = document.createElement("p")
    Season2.innerText=`Season: ${e.season}`

    let Status2 = document.createElement("p")
    Status2.innerText = `Status: ${e.status}`
     
    let visitor_team_score=document.createElement("p");
    visitor_team_score.innerText=`Visitor Team Score: ${e.visitor_team_score
    }`

    let Divison2 = document.createElement("p");
    Divison2.innerText=`Division: ${e.visitor_team.division}`

    box2.append(img2, h2div,  Date2, Season2, Status2, visitor_team_score, Divison2)

    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.append(box1, box2)

    container.append(card);


    });

   
    
     

 }

   
    



 
