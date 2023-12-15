import React, { useEffect, useState } from "react";
import axios from "axios";
import {Main} from "../../styles/HomepageStyle";


function Homepage() {
    let [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get('/main')
            .then(response => setCategory(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            {
                category.map((a, i) => (
                    <Main key={i}>
                        카테고리: {a.category}
                        <img src={a.img} />
                    </Main>
                ))
            }

        </div>
    );
}

export default Homepage;
