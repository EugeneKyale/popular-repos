import React from "react";

import star from "../../assets/icons/star.svg";
import watchersIcon from "../../assets/icons/watchers.svg";
import forkIcon from "../../assets/icons/forks.png";

import styles from "./Repository.module.scss";

const Repository = ({ stars, avatar, title, fullname, description, watchers, forks }) => {
    return (
        <div
            className={styles.repository}
        >
            <div className={styles.repository__avatar}>
                <img src={avatar} alt={fullname} />
            </div>
            <h1>
                {fullname} - {title}
            </h1>
            <p>
                {description}
            </p>
            <div className={styles.repository__stats}>
                <h5>
                    <img alt="stars" src={star} /> {stars}
                </h5>
                <h5>
                    <img alt="watchers" src={watchersIcon} /> {watchers}
                </h5>
                <h5>
                    <img alt="forks" src={forkIcon} /> {forks}
                </h5>
            </div>
        </div>
    );
};

export default Repository;
