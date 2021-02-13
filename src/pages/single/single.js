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
                stars={details.stargazers_count}
                name={details.owner?.name}
                title={details.name}
                avatar={details.owner?.avatar_url}
            />
        </div>
    );
};

export default Single;
