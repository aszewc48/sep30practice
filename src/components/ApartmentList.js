import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const ApartmentList = () => {
    const [apartmentArray,setApartmentArray] = useState([])
    useEffect(() => {
        // fetch('https://ironbnb-m3.herokuapp.com/apartments')
        // .then(res => res.json())
        // .then(json => setApartmentArray(json))
        // .catch(err => console.log('Error fetching data', err))
        axios.get('https://ironbnb-m3.herokuapp.com/apartments')
        .then(res => setApartmentArray(res.data))
        .catch(err => console.log('Error getting data:', err))
    }, [])
    return (
        <div>
            {apartmentArray.length === 0 && <p>Loading...</p>}
            {apartmentArray.map(singleApartment => {
                return (
                <div key={singleApartment._id}>
                    <Link to={`/apartment-details/${singleApartment._id}`}>
                    <img src={singleApartment.img} alt={singleApartment.title} height={100}/>
                    <h3>{singleApartment.title}</h3>
                    <p>Price:{singleApartment.pricePerDay}</p>
                    </Link>
                </div>
                )
            })}
        </div>
    )
}

export default ApartmentList