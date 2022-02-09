import React from 'react';

const InfoMovieComponent = () => {
    const querySearch = window.location.href;
    const urlSearchParams = new URLSearchParams(querySearch);
    const post_Id = Number(urlSearchParams.get("5"));
    console.log(post_Id)
    return (
        <div>

        </div>
    );
};

export {InfoMovieComponent};