import React, { useEffect, useState } from "react";

import Repository from "../../components/Repository";
import { axiosInstance } from "../../_helpers/utils";

import styles from "./single.module.scss";

const Single = (props) => {
    const [details, setDetails] = useState([]);

    const repositoryId = props.match.params.id;

    useEffect(() => {
        axiosInstance.get(`repositories/${repositoryId}`)
            .then(res => {
                setDetails(res.data);
            });
    }, [repositoryId]);

    return (
        <div className={styles.single}>
            <Repository
                id={details.id}
                stars={details.stargazers_count}
                title={details.name}
                description={details.description}
                fullname={details.full_name}
                avatar={details.owner?.avatar_url}
                watchers={details.watchers}
                forks={details.forks}
            />
        </div>
    );
};

export default Single;
