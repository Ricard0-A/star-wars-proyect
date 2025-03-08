import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import images from "../../import_images/images";

export const Details = (props) => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    useEffect(() => {
        console.log("Resource:", params.resource, "UID:", params.uid);
        if (params.resource && params.uid) {
            actions.getDetails(params.resource, params.uid);
        }
        return () => {
            actions.removeCurrentItem();
        };
    }, []);
    return (
        <div className="container d-flex justify-content-center pt-5">
            {store.currentItem && (
                <React.Fragment>
                    <div className="card mb-3 border-0" style={{ maxWidth: "800px", maxHeight: "800px" }}>
                        <div className="row g-0 d-flex align-item-center" style={{ backgroundColor: "#000000" }}>
                            <div className="col-md-6 align-self-center">
                                <img
                                    src={(images[params.resource] || images["characters"])?.[String(params.uid)] || images.vehicles["4"]}
                                    className="card-img-top"
                                    alt={store.currentItem.properties.name}
                                    style={{ height: "441px", objectFit: "cover" }}
                                />
                            </div>
                            <div className="col-md-5">
                                <div className="card-body">
                                    <h1 className="card-title text-white">
                                        <strong>{store.currentItem.properties.name}</strong>
                                    </h1>
                                    <p className="card-text fs-7 text-light pt-2">
                                        In a distant galaxy, where every story echoes through forgotten stars and systems,
                                        there exists a secret so ancient that only the Jedi and the Sith whisper it in their legends.
                                        Echoes of the Force ripple across desert planets and space stations, shaping destinies and
                                        revealing prophecies veiled in time. Few truly understand the balance between light and darkness,
                                        for the truth dwells between shadows and clarity, in a constant struggle for control of the galaxy.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row g-0 py-5" style={{ backgroundColor: "#000000" }}>
                            <div className="d-flex flex-wrap justify-content-center" style={{ color: "#db2818" }}>
                                {params.resource === "people" && (
                                    <>
                                        <div style={{ display: "inline-block", margin: "5px 10px", color: "white" }}><strong>Name:</strong> {store.currentItem.properties.name}</div>
                                        <div style={{ display: "inline-block", margin: "5px 10px", color: "white" }}><strong>Birth:</strong> {store.currentItem.properties.birth_year}</div>
                                        <div style={{ display: "inline-block", margin: "5px 10px", color: "white" }}><strong>Gender:</strong> {store.currentItem.properties.gender}</div>
                                        <div style={{ display: "inline-block", margin: "5px 10px", color: "white" }}><strong>Height:</strong> {store.currentItem.properties.height}</div>
                                        <div style={{ display: "inline-block", margin: "5px 10px", color: "white" }}><strong>Skin Color:</strong> {store.currentItem.properties.skin_color}</div>
                                        <div style={{ display: "inline-block", margin: "5px 10px", color: "white" }}><strong>Eyes Color:</strong> {store.currentItem.properties.eye_color}</div>
                                    </>
                                )}

                                {params.resource === "vehicles" && (
                                    <>
                                        <div style={{ display: "inline-block", margin: "5px 10px", color: "white" }}><strong>Name:</strong> {store.currentItem.properties.name}</div>
                                        <div style={{ display: "inline-block", margin: "5px 10px", color: "white" }}><strong>Model:</strong> {store.currentItem.properties.model}</div>
                                        <div style={{ display: "inline-block", margin: "5px 10px", color: "white" }}><strong>Passengers:</strong> {store.currentItem.properties.passengers}</div>
                                        <div style={{ display: "inline-block", margin: "5px 10px", color: "white" }}><strong>Length:</strong> {store.currentItem.properties.length}</div>
                                        <div style={{ display: "inline-block", margin: "5px 10px", color: "white" }}><strong>Capacity:</strong> {store.currentItem.properties.cargo_capacity}</div>
                                        <div style={{ display: "inline-block", margin: "5px 10px", color: "white" }}><strong>Fuel:</strong> {store.currentItem.properties.consumables}</div>
                                    </>
                                )}

                                {params.resource === "planets" && (
                                    <>
                                        <div style={{ display: "inline-block", margin: "5px 10px", color: "white" }}><strong>Name:</strong> {store.currentItem.properties.name}</div>
                                        <div style={{ display: "inline-block", margin: "5px 10px", color: "white" }}><strong>Climate:</strong> {store.currentItem.properties.climate}</div>
                                        <div style={{ display: "inline-block", margin: "5px 10px", color: "white" }}><strong>Population:</strong> {store.currentItem.properties.population}</div>
                                        <div style={{ display: "inline-block", margin: "5px 10px", color: "white" }}><strong>Orbital Period:</strong> {store.currentItem.properties.orbital_period}</div>
                                        <div style={{ display: "inline-block", margin: "5px 10px", color: "white" }}><strong>Rotation Period:</strong> {store.currentItem.properties.rotation_period}</div>
                                        <div style={{ display: "inline-block", margin: "5px 10px", color: "white" }}><strong>Diameter:</strong> {store.currentItem.properties.diameter}</div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )}
        </div>
    );
};