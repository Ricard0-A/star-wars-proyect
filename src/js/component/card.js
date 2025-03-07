
import PropTypes from "prop-types";
import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import planet1 from "../../img/planets/planet1.webp";
import planet2 from "../../img/planets/planet2.webp";
import planet3 from "../../img/planets/planet3.png";
import planet4 from "../../img/planets/planet4.webp";
import planet5 from "../../img/planets/planet5.webp";
import planet6 from "../../img/planets/planet6.webp";
import planet7 from "../../img/planets/planet7.webp";
import planet8 from "../../img/planets/planet8.jpg";
import planet9 from "../../img/planets/planet9.jpg";
import planet10 from "../../img/planets/planet10.webp";
import planet11 from "../../img/planets/planet11.webp";
import planet12 from "../../img/planets/planet12.webp";

// Characters
import character1 from "../../img/characters/character1.jpg";
import character2 from "../../img/characters/character2.png";
import character3 from "../../img/characters/character3.webp";
import character4 from "../../img/characters/character4.jpg";
import character5 from "../../img/characters/character5.jpg";
import character6 from "../../img/characters/character6.jpg";
import character7 from "../../img/characters/character7.webp";
import character8 from "../../img/characters/character8.jpg";
import character9 from "../../img/characters/character9.webp";
import character10 from "../../img/characters/character10.jpg";
import character11 from "../../img/characters/character11.jpg";
import character12 from "../../img/characters/character12.webp";
// Vehicles
import vehicle1 from "../../img/vehicles/vehicle1.webp";
import vehicle2 from "../../img/vehicles/vehicle2.jpeg";
import vehicle3 from "../../img/vehicles/vehicle3.webp";
import vehicle4 from "../../img/vehicles/vehicle4.jpeg";
import vehicle5 from "../../img/vehicles/vehicle5.jpg";
import vehicle6 from "../../img/vehicles/vehicle6.jpg";
import vehicle7 from "../../img/vehicles/vehicle7.jpg";
import vehicle8 from "../../img/vehicles/vehicle8.webp";
import vehicle9 from "../../img/vehicles/vehicle9.jpg";
import vehicle10 from "../../img/vehicles/vehicle10.webp";
import vehicle11 from "../../img/vehicles/vehicle11.webp";
import vehicle12 from "../../img/vehicles/vehicle12.jpg";

const images = {
    planets: {
        "1": planet1, "2": planet2, "3": planet3, "4": planet4, "5": planet5,
        "6": planet6, "7": planet7, "8": planet8, "9": planet9, "10": planet10,
        "11": planet11, "12": planet12
    },
    characters: {
        "1": character1, "2": character2, "3": character3, "4": character4, "5": character5,
        "6": character6, "7": character7, "8": character8, "9": character9, "10": character10,
        "11": character11, "12": character12
    },
    vehicles: {
        "4": vehicle1, "6": vehicle2, "7": vehicle3, "8": vehicle4, "14": vehicle5,
        "16": vehicle6, "18": vehicle7, "19": vehicle8, "20": vehicle9, "24": vehicle10,
        "25": vehicle11, "30": vehicle12
    }
};

export const Card = ({ item, resource }) => {
    const { store, actions } = useContext(Context);

   
    const [like, setLike] = useState(false);
    const handleClick = () => {
        setLike(!like)
    }

    useEffect(() => {
        if (like) {
            actions.getFavorites(resource, item.uid)
        }
    }, [like])
    console.log("Resource:", resource);
    console.log("Item UID:", item.uid);
    console.log("Available images:", images[resource]);
    return (
        <div className="card my-5 mx-3 border-2 rounded-2" style={{ minWidth: "20rem", borderRadius: "20px" }} >
            
            <img src={images[resource][String(item.uid)] || vehicle1} className="card-img-top" alt={item.name} />

            <div className="card-body bg-dark text-center">
                <h3 className="card-title font-weight-bold text-white py-2">{item.name}</h3>
                <div className="d-flex container justify-content-between">
                    <Link to={`/${resource}/${item.uid}`} className="btn btn-outline-warning">
                        <strong>Descripción </strong>
                    </Link>
                    <button
                        type="button"
                        onClick={handleClick}
                        className={"btn btn-outline-danger" + (like ? "btn btn-warning" : "btn btn-outline-danger")}>
                        <i className="fas fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div >
    )
}

Card.propTypes = {
    item: PropTypes.object,
    resource: PropTypes.string,
};


