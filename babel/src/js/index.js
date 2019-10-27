import "../css/style.css";
import search from "./search";
import render from "./render";

const id = prompt("Quiene es ese pokemon");

search(id)
    .then(data => {
        render(data);
    })
    .catch(e => {
        console.log("no hubo pokemon");
    });
