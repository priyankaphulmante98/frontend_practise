import React from "react";
import { useState } from "react";

function Todo() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [edittodo, seteditTodo] = useState(null)
  const [update, setUpdate]  = useState(false)

  function handleAdd(input) {
    if(!input){
        alert("please add some task")
    }
    else if(input && update){

        setTodo(
            todo.map((e) => {
                if(e.id === edittodo){
                    return {...e, title:input} 
                }
                return e 
            })
        )
        setInput("")
        setUpdate(false)
    }

    else{
    const data = {
      title: input,
      id: input.length + Date.now(),
      status: false,
    };
    setTodo([...todo, data]);
    setInput("")
    console.log(todo);
    }
  }

  function handleStatus(id) {
    const toggleData = todo.map((e) =>
      e.id === id ? { ...e, status: !e.status } : e
    );

    setTodo(toggleData);
  }

  function handleDelete(id){
     const delet = todo.filter((e) => {
        return e.id !== id 
     })
     setTodo(delet)
  }

  function handleUpdate(id){
    setUpdate(true)
    const updateItem =  todo.find((e) => {
        return e.id === id
    })
    console.log(updateItem)
    setInput(updateItem.title)
    seteditTodo(updateItem.id)

  }

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="add todo"
        onChange={(e) => setInput(e.target.value)}
      />
      {
        update?<button onClick={() => handleAdd(input)}>Edit</button>:<button onClick={() => handleAdd(input)}>ADD</button>
      }
      

      <div>
        {todo.map((e) => {
          return (
            <div
              key={e.id}
              style={{
                height: "80px",
                width: "80%",
                margin: "auto",
                display: "flex",
                justifyContent: "space-around",
                border: "2px solid red",
                alignItems: "center",
                marginTop: "5%",
              }}
            >
              <h1>{e.title}</h1>
              <div>
                {e.status ? (
                  <i
                    style={{ fontSize: "20px", color: "green" }}
                    class="fa-solid fa-square-check"
                    onClick={() => handleStatus(e.id)}
                  ></i>
                ) : (
                  <i
                    style={{ fontSize: "20px", color: "red" }}
                    class="fa-regular fa-square"
                    onClick={() => handleStatus(e.id)}
                  ></i>
                )}
              </div>
              <i
                style={{ fontSize: "20px", color: "blue" }}
                class="fa-solid fa-trash"
                 onClick={() => handleDelete(e.id)}
              ></i>

              <i
                style={{ fontSize: "20px", color: "green" }}
                class="fa-solid fa-edit"
                onClick={() => handleUpdate(e.id)}
              ></i>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Todo;
