import { useState, useEffect } from "react";
import instance from '../helper/axios';

function Row({ title, fetchUrl }) {
    const [movie, setMovie] = useState([]);

    useEffect(() => {

        async function fetchData() {

            const response = await instance.get(fetchUrl);

            console.log(response);

        }

        fetchData();

    }, [])

    return (
        <div>
            <h1>{title}</h1>
            <p>{fetchUrl}</p>
        </div>
    )
}

export default Row
