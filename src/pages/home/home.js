import React, { useEffect, useState } from "react";

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
        <main className={styles.home}>
            {
                repositories.map((repository) => (
                    <div
                        key={repository.id}
                    >
                        {repository.name}
                    </div>
                ))
            }
        </main>
    );
};

export default Home;
