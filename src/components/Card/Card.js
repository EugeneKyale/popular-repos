import React from "react";

import styles from "./Card.module.scss";

const Home = ({ id, name, avatar, title }) => {
    return (
        <div
            key={id}
            className={styles.card}
        >
            <img src={avatar} alt={name} />
            <div className={styles.card__details}>
                <h3>
                    {title}
                </h3>
            </div>
        </div>
    );
};

export default Home;
