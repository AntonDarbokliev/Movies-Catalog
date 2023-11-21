import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { movieFactory } from "../../services/movieService.js"
import { useForm } from "../../hooks/useForm.js"
import { EditCreateForm } from "../Shared/EditCreateForm/EditCreateForm.jsx"

export const Edit = () => {
    const {id} = useParams()
    const movieService = movieFactory()
    const [movieData,setMovieData] = useState()
    useEffect(() => {
        movieService.get(`/${id}`)
            .then(data => setMovieData(data))
            .catch(err => console.error(err))
    },[id])

    const onEditSubmit = () => {
        console.log(movieData.name);
    } 

    const {formValues , onChangeHandler,onSubmit} = useForm({
        name : movieData?.name,
        director : movieData?.director,
        year : movieData?.year,
        topCast : (movieData?.topCast.join(', ')),
        moviePoster : movieData?.moviePoster,
        movieImagesOne: (movieData?.movieImages[0].movieImage),
        movieImagesTwo: (movieData?.movieImages[1].movieImage),
        movieImagesThree: (movieData?.movieImages[2].movieImage),
        movieTrailer : movieData?.movieTrailer,
        description: movieData?.description,
        genres: (movieData?.genres.join(' ')),
    },onEditSubmit)

    return (
        <>
        <EditCreateForm onSubmit={onSubmit} onChangeHandler={onChangeHandler} formValues={formValues} text={'Edit'} />
        </>
    )
}