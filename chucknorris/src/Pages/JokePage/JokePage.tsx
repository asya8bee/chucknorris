import { useEffect } from "react";
import { useParams } from "react-router"
import { axiosApi } from "../../axiosApi";
import { useState } from 'react';
import { useJokeStore } from "../../store/use-jokes-store";

export const JokePage = () => {
    const {category} =useParams();
    const {joke, getJoke} = useJokeStore()

    useEffect(() => {
        if (category) {
            getJoke(category)
        }
    },[category]);

    return(
        <div>
            Joke category = {category}
            <p>(joke)</p>
        </div>
    )
}

