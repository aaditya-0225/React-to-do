import Input from "./Input";
import ListGroup from "react-bootstrap/ListGroup";

import { useState } from "react";
export default function Todo() {
  const [task, setTask] = useState("");
  function delete_todo(e) {
    e.target.parentElement.remove();
  }
  function edittodo(e) {
    const newdiv = document.createElement("div");
    newdiv.className = "container text-center mt-3";
    var i = document.createElement("input");
    i.className = "form-control";
    i.setAttribute("type", "text");
    newdiv.appendChild(i);
    var b1 = document.createElement("button");
    b1.className = "btn btn-primary";
    b1.textContent = "Update";
    b1.onclick = edit_text;
    b1.style = " margin-inline:2%; margin-top:2%;";
    newdiv.appendChild(b1);
    var b2 = document.createElement("button");
    b2.className = "btn btn-primary";

    b2.textContent = "Close";
    b2.onclick = close_box;
    b2.style = " margin-top:2%;";
    newdiv.appendChild(b2);
    e.target.parentElement.appendChild(newdiv);
  }
  function edit_text(e) {
    const y = e.target.parentElement.firstChild.value;
    const textnode1 = document.createTextNode(y);
    e.target.parentElement.parentElement.replaceChild(
      textnode1,
      e.target.parentElement.parentElement.firstChild
    );
    e.target.parentElement.remove();
  }

  function close_box(e) {
    e.target.parentElement.remove();
  }

  const handleChange = (event) => {
    setTask(event.target.value);
  };
  const handleClick = () => {
    const tasks = document.createElement("button");
    tasks.className =
      "list-group-item list-group-item-primary list-group-item-action";
    var y = Math.random(10000);
    var x = task + y;
    tasks.id = x;
    tasks.innerText = task;
    tasks.style = " text-align: left ; font-size: 160%; margin-botton: 2%;";
    document.getElementById("listGroup").appendChild(tasks);

    var edit = document.createElement("Button");
    edit.innerText = "edit";
    edit.className = "btn btn-dark";
    edit.style = "float:right; margin-inline:2%;   display: none;";
    edit.onclick = edittodo;
    document.getElementById(x).appendChild(edit);

    var del = document.createElement("Button");
    del.innerText = "delete";
    del.className = "btn btn-dark";
    del.style = "float:right;   display: none;";
    del.onclick = delete_todo;
    document.getElementById(x).appendChild(del);
    setTask("");
  };
  const hover = (e) => {
    var elems = document.getElementsByClassName("btn btn-dark");
    for (var i = 0; i < elems.length; i += 1) {
      elems[i].style.display = "block";
    }
  };
  const away = (e) => {
    var elems = document.getElementsByClassName("btn btn-dark");
    for (var i = 0; i < elems.length; i += 1) {
      elems[i].style.display = "none";
    }
  };

  return (
    <div>
      <div>
        <h1
          style={{
            fontFamily: "Arial",
            color: "white",
            textAlign: "center",
            marginTop: "1%",
            backgroundColor: "black",
            borderRadius: "8px",
            marginLeft: "40%",
            marginRight: "40%"
          }}
        >
          To-do{" "}
        </h1>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Input value={task} onChange={handleChange} onClick={handleClick} />
      </div>
      <div id="list" style={{ marginLeft: "10%", marginRight: "10%" }}>
        <ListGroup
          id="listGroup"
          onMouseOver={hover}
          onMouseOut={away}
        ></ListGroup>
      </div>
    </div>
  );
}
