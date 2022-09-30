import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AddApartment = () => {
    const navigate = useNavigate()
    const [image,setImage] = useState('')
    const [title,setTitle] = useState('')
    const [price,setPrice] = useState('')
    const updateImage = event => setImage(event.target.value)
    const updateTitle = event => setTitle(event.target.value)
    const updatePrice = event => setPrice(event.target.value)
    const submitForm = event => {
        event.preventDefault()
        const bodyObject = {
            img: image,
            title: title,
            pricePerDay: Number(price)
        }
        // fetch('https://ironbnb-m3.herokuapp.com/apartments', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application.json'
        //     },
        //     body: JSON.stringify(bodyObject)
        // })
        //     .then(res => res.json())
        //     .then(json => {
        //         navigate('/')
        //         console.log(json)})
        //     .catch(err => console.log('Error fetching post data:', err))
        axios.post('https://ironbnb-m3.herokuapp.com/apartments', bodyObject)
            .then(res => {
                console.log(res.data)
                navigate('/')
            })
            .catch(err => console.log(err))
    }
    return (
        <form onSubmit={submitForm}>
            <div className="form-container">
                <label>Image</label>
                <input type='text' value={image} onChange={updateImage}/>
            </div>
            <div className="form-container">
                <label>Title</label>
                <input type='text' value={title} onChange={updateTitle}/>
            </div>
            <div className="form-container">
                <label>Price Per Day</label>
                <input type='number' value={price} onChange={updatePrice}/>
            </div>
            <button>Create New Apartment</button>
        </form>
    )
}

export default AddApartment