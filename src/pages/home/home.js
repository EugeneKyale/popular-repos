import React, { useEffect, useState } from "react";

import Card from "../../components/Card";
import { axiosInstance } from "../../_helpers/utils";

import styles from "./home.module.scss";

const Home = () => {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        axiosInstance.get(`search/repositories?q=stars&direction=desc&per_page=10`)
            .then(res => {
                setRepositories(res.data.items);
            });
    }, []);

    return (
        <div className={styles.home}>
            {
                repositories.map((repository) => (
                    <Card
                        id={repository.id}
                        name={repository.owner.name}
                        title={repository.name}
                        avatar={repository.owner.avatar_url}
                    />
                ))
            }
        </div>
    );
};

export default Home;
