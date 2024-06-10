
import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Contact from '../pages/Contact'
import Doctors from '../pages/Doctors/Doctors'
import DoctorsDetails from '../pages/Doctors/DoctorsDetails'
import {Routes,Route} from 'react-router-dom'
import MyAccount from '../Dashboard/user-account/MyAccount.jsx'
import Dashboard from '../Dashboard/doctor-account/Dashboard.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'
import Checkout from '../pages/Checkout.jsx'
const Routers = () => {
  return <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/doctors' element={<Doctors/>}/>
    <Route path='/doctors/:id' element={<DoctorsDetails/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<SignUp/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/users/profile/me' element={<ProtectedRoute allowedRoles={['patient']}><MyAccount/></ProtectedRoute>}/>
    <Route path='/doctors/profile/me' element={<ProtectedRoute allowedRoles={['doctor']}><Dashboard/></ProtectedRoute>}/>
    <Route path='/checkout-success' element={<Checkout/>}/>


  </Routes>
}

export default Routers
