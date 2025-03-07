import React, { useContext } from "react";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Home = () => {
    const context = useContext(Context);
    return (
        <div className="mt-5 mx-5">
            <div className="d-flex flex-column">
                <h2 className="custom-title">PERSONAJES</h2> 
                <div className="d-flex flex-row flex-nowrap overflow-auto">
                    {context.store.people.map((character) => (
                        <Card key={character.uid} item={character} resource={"characters"} />
                    ))}
                </div>
            </div>
            
            <div className="d-flex flex-column mt-5">
                <h2 className="custom-title">VEHÍCULOS</h2>
                <div className="d-flex flex-row flex-nowrap overflow-auto">
                    {context.store.vehicles.map((vehicle) => (
                        <Card key={vehicle.uid} item={vehicle} resource={"vehicles"} />
                    ))}
                </div>
            </div>
            
            <div className="d-flex flex-column mt-5 mb-5">
                <h2 className="custom-title">PLANETAS</h2>
                <div className="d-flex flex-row flex-nowrap overflow-auto" style={{ marginBottom: "120px" }}>
                    {context.store.planets.map((planet) => (
                        <Card key={planet.uid} item={planet} resource={"planets"} />
                    ))}
                </div>
            </div>
        </div>
    );
};

