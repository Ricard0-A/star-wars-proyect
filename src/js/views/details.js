
import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Details = (props) => {

    const { store, actions } = useContext(Context);
    const params = useParams();
    useEffect(() => {
        console.log("Resource:", params.resource, "UID:", params.uid);
        if (params.resource && params.uid) {
            actions.getDetails(params.resource, params.uid)
        }
        return () => {
            actions.removeCurrentItem();
        }
    }, [])
    return (
        <div className="container d-flex justify-content-center pt-5">
            {store.currentItem && (
                <React.Fragment>
                    <div className="card mb-3 border-0" style={{ maxWidth: "700px", maxHeight: "800px" }}>
                        <div className="row g-0 d-flex align-item-center" style={{ backgroundColor: "#000000" }}>
                            <div className="col-md-6 align-self-center">
                                <img src={(params.resource === "planets" && params.uid === "1") ? "https://static.wikia.nocookie.net/theclonewiki/images/b/b4/Tatooine-TCW.png/" : `https://starwars-visualguide.com/assets/img/${params.resource === "people" ? "characters" : params.resource}/${params.uid}.jpg`} className="card-img-top" alt="..." />
                                
                                
                            </div>
                            <div className="col-md-5">
                                <div className="card-body">
                                    <h1 className="card-title text-white"><strong>{store.currentItem.properties.name}</strong></h1>
                                    <p className="card-text fs-7 text-light pt-2">En una galaxia lejana, donde cada historia resuena a través de estrellas y sistemas olvidados, existe un secreto tan antiguo que solo los Jedi y los Sith susurran en sus leyendas. Ecos de la Fuerza recorren planetas desérticos y estaciones espaciales, moldeando destinos y revelando profecías veladas en el tiempo. Pocos comprenden realmente el equilibrio entre la luz y la oscuridad, pues la verdad habita entre las sombras y la claridad, en una lucha constante por el control de la galaxia.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row g-0 justify-content-around py-5" style={{ backgroundColor: "#000000" }}>
                            {params.resource === "people" && (
                                <div className="d-flex justify-content-around text-center" style={{ color: "#db2818" }}>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#000000" }}><strong>Nombre:<br></br></strong>{store.currentItem.properties.name}</div>
                                    <div className="col-md-2 p-3 text-light rounded m-2" style={{ backgroundColor: "#000000" }}><strong>Año:<br></br></strong>{store.currentItem.properties.birth_year}</div>
                                    <div className="col-md-2 p-3 text-light rounded m-2" style={{ backgroundColor: "#000000" }}><strong>Genero:<br></br></strong>{store.currentItem.properties.gender}</div>
                                    <div className="col-md-2 p-3 text-light rounded m-2" style={{ backgroundColor: "#000000" }}><strong>Altura:<br></br></strong>{store.currentItem.properties.height}</div>
                                    <div className="col-md-2 p-3 text-light rounded m-2" style={{ backgroundColor: "#000000" }}><strong>Piel:<br></br></strong>{store.currentItem.properties.skin_color}</div>
                                    <div className="col-md-2 p-3 text-light rounded m-2" style={{ backgroundColor: "#000000" }}><strong>Ojos:<br></br></strong>{store.currentItem.properties.eye_color}</div>
                                </div>
                            )}

                            {params.resource === "vehicles" && (
                                <div className="d-flex justify-content-around p-3 text-center" style={{ color: "#000000" }}>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#000000" }}><strong>Nombre:<br></br></strong>{store.currentItem.properties.name}</div>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#000000" }}><strong>Modelo:<br></br></strong>{store.currentItem.properties.model}</div>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#000000" }}><strong>Pasageros:<br></br></strong>{store.currentItem.properties.passengers}</div>
                                    <div className="col-md-2 p-3 text-light rounded m-2" style={{ backgroundColor: "#000000" }}><strong>Longitud:<br></br></strong>{store.currentItem.properties.length}</div>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#000000" }}><strong>Capacidad:<br></br></strong>{store.currentItem.properties.cargo_capacity}</div>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#000000" }}><strong>Combustible:<br></br></strong>{store.currentItem.properties.consumables}</div>
                                </div>
                            )}

                            {params.resource === "planets" && (
                                <div className="d-flex justify-content-around p-3 text-center" style={{ color: "#000000" }}>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#000000" }}><strong>Nombre:<br></br></strong>{store.currentItem.properties.name}</div>
                                    <div className="col-md-2 p-3 text-light rounded m-2" style={{ backgroundColor: "#000000" }}><strong>Atmosfera Interior:<br></br></strong>{store.currentItem.properties.climate}</div>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#000000" }}><strong>Poblacion:<br></br></strong>{store.currentItem.properties.population}</div>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#000000" }}><strong>Periodo Orbital:<br></br></strong>{store.currentItem.properties.orbital_period}</div>
                                    <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#000000" }}><strong>Periodo Rotacional:<br></br></strong>{store.currentItem.properties.rotation_period}</div>
                                    <div className="col-md-2 p-3 text-light rounded m-2" style={{ backgroundColor: "#000000" }}><strong>Diametro:<br></br></strong>{store.currentItem.properties.diameter}</div>
                                </div>
                            )}
                            
                        </div>
                    </div>
                </React.Fragment>
            )}
        </div>
    )
}