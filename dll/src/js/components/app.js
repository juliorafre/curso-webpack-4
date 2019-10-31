import React, { useState } from "react";
// Components
import Loader from "./loader.js";
// Data
import data from "./data.json";

// Assets
import imgLogo from "../../images/platzi.png";
import video from "../../video/que-es-core.mp4";

//Estilos con preprocesadores
import "../../css/sass/sass.scss";
import "../../css/less/less.less";
import "../../css/stylus/stylus.styl";

function App() {
    const [loaderList, setLoaderList] = useState([]);

    function handleClick() {
        console.log("click");
        setLoaderList(data.loaders);
    }

    return (
        <div>
            <p className="sass">Esto es SASS</p>
            <p className="less">Esto es LESS</p>
            <p className="stylus">Esto es Stylus</p>
            <p className="post-css">Esto es post-CSS</p>
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
