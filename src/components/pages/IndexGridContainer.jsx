//Contenido del index.html

import { BannerSitio } from "../common/BannerSitio.jsx";
import { Footer } from "../common/Footer.jsx";
import { useEffect, useState } from "react";
import { API_URL } from "../../api/api.js";

export function IndexGridContainer() {
    //Para el manejo de estados
    const [servicios, setServicios] = useState([]);

    //Efecto secundario - fetch con AXIOS
    useEffect(() =>{
        API_URL.get("/servicios").then((response) => {
            setServicios(response.data);  //se cambia el estado para re-dibujar la pagina
        });
    }, []);

    return (
        <div className="gridContainer">
        
            {/* PRIMERA FILA DE GRILLA
                Sponsors y slogan del sitio */}
            <div className="advertisement1"></div>
            <BannerSitio />
            <div className="advertisement2"></div>

            {/* SEGUNDA FILA DE GRILLA
                Lista de servicios que se ofrecen */}
            <div className="servicesFlex">

                {servicios.map(function(servicio) {
                    const num=servicio.id;

                    return (
                        <div className="service" key={servicio.id}>
                            <a href="http://localhost:3000/servicio/{num}" target="_blank">
                                <img
                                    src={servicio.archivo}
                                    alt={servicio.nombre} />
                                <h2>{servicio.nombre}</h2>
                            </a>
                        </div>
                    )})}

            </div>

            {/* TERCERA FILA DE GRILLA
                Pie de la pagina */}
            <Footer />
        </div>
    );
}