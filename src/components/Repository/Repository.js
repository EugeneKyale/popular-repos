import React from "react";

import styles from "./Repository.module.scss";

const Repository = ({ stars, name, avatar, title }) => {
    return (
        <div
            className={styles.repository}
        >
            <img src={avatar} alt={name} />
            <h1>
                {title}
            </h1>
            <p>
                {stars}
            </p>
        </div>
    );
};

export default Repository;
