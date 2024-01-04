import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { movieFactory } from "../../services/movieService";
import { useForm } from "../../hooks/useForm";
import { EditCreateForm } from "../Shared/EditCreateForm/EditCreateForm";
import { useMovieContext } from "../../contexts/MovieContext";

import { MovieData } from "../../types/movieData";

export const Edit = () => {
    const { id } = useParams();

    const movieService = movieFactory();
    const { edit } = useMovieContext();

    const onEditClick = async (values: MovieData) => {
        await edit(values, id!);
    };

    const { formValues, onChangeHandler, onSubmit, changeValues } = useForm(
        {
            name: "",
            director: "",
            year: "",
            topCast: "",
            moviePoster: "",
            movieImagesOne: "",
            movieImagesTwo: "",
            movieImagesThree: "",
            movieTrailer: "",
            description: "",
            genres: "",
        },
        onEditClick
    );

    useEffect(() => {
        movieService
            .getOne(`${id}`)
            .then((data) => {
                const filledValues = {
                    name: data.name,
                    director: data.director,
                    year: (data.year).toString(),
                    topCast: data.topCast.join(', '),
                    moviePoster: data.moviePoster,   
                    movieImagesOne: data.movieImages[0].movieImage,
                    movieImagesTwo: data.movieImages[1].movieImage,
                    movieImagesThree: data.movieImages[2].movieImage,
                    movieTrailer: data.movieTrailer,
                    description: data.description,
                    genres: data.genres.join(' '),
                };

                changeValues(filledValues);
            })
            .catch((err) => console.error(err));
    }, [id]);

    return (
        <>
            <EditCreateForm
                onSubmit={onSubmit}
                onChangeHandler={onChangeHandler}
                formValues={formValues}
                text={"Edit"}
                modalText={`Are you sure you want to edit ${formValues.name}`}
                modalTitle={"Edit Movie"}
            />
        </>
    );
};
