import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { movieFactory } from "../../services/movieService.js"
import { useForm } from "../../hooks/useForm.js"
import { EditCreateForm } from "../Shared/EditCreateForm/EditCreateForm.jsx"
import { useErrorContext } from "../../contexts/ErrorContext.jsx"


export const Edit = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const movieService = movieFactory()
    const {setErrors} = useErrorContext()

    const onEditSubmit = async (values) => {
        const result = confirm('Are you sure want to edit this movie : ' + values.name)
        if(result){
            try {
                await movieService.put(id,values)
                navigate(`/movie/${id}/details`)
            } catch (err) {
                setErrors(err)
            }
        }
    } 
    
    const {formValues , onChangeHandler,onSubmit, changeValues} = useForm({
        name : '' , 
        director: '',
        year : '',
        topCast : '',
        moviePoster : '',
        movieImagesOne: '',
        movieImagesTwo: '',
        movieImagesThree: '',
        movieTrailer : '',
        description: '',
        genres: '',
    },onEditSubmit)

    useEffect(() => {
        movieService.get(`/${id}`)
            .then(data => changeValues({
                ...data, 
                movieImagesOne: (data?.movieImages[0].movieImage),
                movieImagesTwo: (data?.movieImages[1].movieImage),
                movieImagesThree: (data?.movieImages[2].movieImage),}))
            .catch(err => console.error(err))
    },[id])

    return (
        <>
        <EditCreateForm onSubmit={onSubmit} onChangeHandler={onChangeHandler} formValues={formValues} text={'Edit'} />
        </>
    )
}