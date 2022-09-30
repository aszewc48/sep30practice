import logo from './logo.svg';
import './App.css';
import ApartmentList from './components/ApartmentList';
import AddApartment from './components/AddApartment';
import ApartmentDetails from './components/ApartmentDetails';
import {Link,Routes,Route,NavLink} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Hobey ho mate!</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/add-apartment'>Add Apartment</Link>
      </nav>
      <Routes>
        <Route path='/' element={<ApartmentList />}/>
        <Route path='/add-apartment' element={<AddApartment />}/>
        <Route path='/apartment-details/:apartmentId' element={<ApartmentDetails />}/>
      </Routes> 
    </div>
  );
}

export default App;
