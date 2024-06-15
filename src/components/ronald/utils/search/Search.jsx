import "./Search.scss";
import React from "react";

const Search = () => {

    const search_img = process.env.PUBLIC_URL + "/images/ronald/search/search.png";

    return (
        <div className="ronald-search">

            <div className="search-container">
                <img src={search_img} className="search-icon" alt="search" />
                <input type="text" className="search" />
            </div> 

        </div>
    );
}

export default Search;