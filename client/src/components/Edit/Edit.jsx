import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { movieFactory } from "../../services/movieService.js"
import { useForm } from "../../hooks/useForm.js"
import { EditCreateForm } from "../Shared/EditCreateForm/EditCreateForm.jsx"
import { useErrorContext } from "../../contexts/ErrorContext.jsx"
import { useAuthContext } from "../../contexts/AuthContext.jsx"
import { useMovieContext } from "../../contexts/MovieContext.jsx"
import { Modal } from "../Shared/Modal/Modal.jsx"



export const Edit = () => {
    const {id} = useParams()

    // const navigate = useNavigate()
    const movieService = movieFactory()
    // const [openModal,setOpenModal] = useState()
    // const {setErrors} = useErrorContext()
    // const {userId} = useAuthContext()
    const {edit} = useMovieContext()

    const onEditClick = async (values) => {
        await edit(values,id)
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
    },onEditClick)

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
        <EditCreateForm 
        onSubmit={onSubmit} 
        onChangeHandler={onChangeHandler} 
        formValues={formValues} 
        text={'Edit'} 
        modalText={`Are you sure you want to edit ${formValues.name}`}
        modalTitle={'Edit Movie'}
        />
        </>
    )
}