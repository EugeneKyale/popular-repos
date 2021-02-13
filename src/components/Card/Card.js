import React from "react";
import { Link } from "react-router-dom";

import styles from "./Card.module.scss";

const Card = ({ id, stars, name, avatar, title }) => {
    return (
        <div
            key={id}
            className={styles.card}
        >
            <img src={avatar} alt={name} />
            <div className={styles.card__details}>
                <Link to={`repository/${id}`}>
                    <h3>
                        {title}
                    </h3>
                </Link>
                <p>
                    {stars}
                </p>
            </div>
        </div>
    );
};

export default Card;
