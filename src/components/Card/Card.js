import React from "react";
import { Link } from "react-router-dom";

import star from "../../assets/icons/star.svg";

import styles from "./Card.module.scss";

const Card = ({ id, stars, avatar, title, fullname, description }) => {
    return (
        <div
            key={id}
            className={styles.card}
        >
            <div className={styles.card__bio}>
                <img src={avatar} alt={fullname} />
                <Link to={`repository/${id}`}>
                    {fullname}/{title}
                </Link>
            </div>
            <div className={styles.card__details}>
                <p>
                    {description}
                </p>
                <h6>
                    <img alt="stars" src={star} /> {stars}
                </h6>
            </div>
        </div>
    );
};

export default Card;
