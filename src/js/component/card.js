import PropTypes from "prop-types";
import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import images from "../../import_images/images"; // Check this out before use main images

export const Card = ({ item, resource }) => {
    const { store, actions } = useContext(Context);
    const [like, setLike] = useState(false);

    useEffect(() => {
        const isFavorite = store.list.some(fav => fav.uid === item.uid && fav.resource === resource);
        setLike(isFavorite);
    }, [store.list, item.uid, resource]);

    const handleClick = () => {
        if (like) {
            actions.deleteFavorite(item.uid, resource); 
        } else {
            actions.getFavorites(resource, item.uid); 
        }
        setLike(!like); 
    };

    return (
        <div className="card my-5 mx-3 border-2 rounded-2" style={{ minWidth: "20rem", borderRadius: "20px" }} >
            <img 
                src={(images[resource] || images["characters"])?.[String(item.uid)] || images.vehicles["4"]} 
                className="card-img-top" 
                alt={item.name} 
            />

            <div className="card-body bg-dark text-center">
                <h3 className="card-title font-weight-bold text-white py-2">{item.name}</h3>
                <div className="d-flex container justify-content-between">
                    <Link to={`/${resource}/${item.uid}`} className="btn btn-outline-warning">
                        <strong>Description</strong>
                    </Link>
                    <button
                        type="button"
                        onClick={handleClick}
                        className={"btn " + (like ? "btn-warning" : "btn-outline-danger")}>
                        <i className="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    item: PropTypes.object,
    resource: PropTypes.string,
};
