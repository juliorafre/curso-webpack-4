import React, { useState } from "react";
import data from "./data.json";
import Loader from "./loader.js";
import imgLogo from "../../images/platzi.png";
import video from "../../video/que-es-core.mp4";

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
            <p>
                <video
                    width={360}
                    controls
                    poster={imgLogo}
                    src={video}
                ></video>
                <img src={imgLogo} width={40} alt="Logo" />
            </p>
        </div>
    );
}

export default App;
