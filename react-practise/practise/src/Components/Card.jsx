import React, { useEffect, useState } from "react";

function Card() {
  const [data, setData] = useState([]);
  async function getData() {
    let res = await fetch(`https://fakestoreapi.com/products`);
    let data = await res.json();
    // console.log(data)
    setData(data);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      {data.map((e) => {
        return (
          <div className="card">
            <img src={e.image} alt="" />
            <h3>{e.title}</h3>
            <h5>{e.price}</h5>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
