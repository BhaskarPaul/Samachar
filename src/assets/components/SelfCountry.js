import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./Card";
import Loader from "./Loader";
import { API } from "../../API";
import { withRouter } from "react-router-dom";

const SelfCountry = ({ countryCode }) => {
    let newCountryCode = String(countryCode).toLowerCase();
    const [allNews, setAllNews] = useState([]);

    const getAllNews = () => {
        axios
            .get(
                `https://newsapi.org/v2/top-headlines?country=${newCountryCode}&apiKey=${API}`
            )
            // .then((response) => console.log(response.data.articles))
            .then((response) =>
                setAllNews([...allNews, ...response.data.articles])
            )
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getAllNews();
    }, []);

    return (
        <div>
            {allNews.length === 0 ? (
                <Loader />
            ) : (
                allNews.map(
                    (item, idx) =>
                        item.title !== "No title" && (
                            <NewsCard
                                key={idx}
                                title={item.title}
                                description={item.description}
                                image={item.urlToImage}
                                content={item.content}
                                url={item.url}
                            />
                        )
                )
            )}
        </div>
    );
};

export default React.memo(withRouter(SelfCountry));
