import React, { useState } from "react";
import data from "./data.json";
import Loader from "./loader.js";

function App() {
    const [loaderList, setLoaderList] = useState([]);

    function handleClick() {
        console.log("click");
        setLoaderList(data.loaders);
    }

    return (
        <div>
            <ul>
                {loaderList.map(loader => (
                    <Loader {...loader} key={loader.id} />
                ))}
            </ul>
            <button onClick={handleClick}>Mostrar!</button>
            Aplicacion hecha en React.JS
        </div>
    );
}

export default App;
