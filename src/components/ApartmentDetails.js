import {useParams} from 'react-router-dom'
import { useEffect,useState } from 'react'

const ApartmentDetails = () => {
    const [apartmentObject,setApartmentObject] = useState('')
    const {apartmentId} = useParams()
    useEffect(() => {
        fetch(`https://ironbnb-m3.herokuapp.com/apartments/${apartmentId}`)
        .then(res => res.json())
        .then(json => setApartmentObject(json))
        .catch(err => console.log('Error fetching data:', err))
    }, [apartmentId])
    return (
        <div>
            {apartmentId ? (
                <div>
                    <img src={apartmentObject.img} alt={apartmentObject.id} height={100}/>
                    <p>{apartmentObject.title}</p>
                    <p>{apartmentObject.pricePerDay}</p>
                </div>
             ) : (
                <p>Loading...</p>
             )}
        </div>
    )
}

export default ApartmentDetails