import {useContext} from 'react'
import {BiMenu} from 'react-icons/bi'
import { authContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Tabs = ({tab,setTab}) => {
  const {dispatch} =useContext(authContext)
  const navigate =useNavigate()
  const handleLogout =()=>{
    dispatch({type:'LOGOUT'})
    navigate('/'); 
  }

  const handleDeleteAccount = () => {
    // Assuming there's a deleteAccount function in your auth context
    // You should replace this with the actual function from your context
     console.log("object")

    // Perform any necessary actions before deleting the account, such as confirmation prompts, etc.
    // if (window.confirm('Are you sure you want to delete your account?')) {
      // Call the deleteAccount function
     dispatch({type:'DELETE_ACCOUNT'} )

      // After deleting the account, you might want to navigate to a different page or perform other actions
      // For now, let's navigate to the homepage
      navigate('/');
    // }
  };
  return (
  <div>
    <span className='lg:hidden'>
      <BiMenu className='w-6 h-6 cursor-pointer'/>
      </span>
      <div className="hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md">
        <button
        onClick={()=>setTab('overview')}
         className={ `${tab==='overview' ? 
        'bg-indigo-100 text-primaryColor':
        'bg-transparent text-headingColor'} w-full btn mt-0 rounded-md `} >
          Overview</button>
          <button 
           onClick={()=>setTab('appointments')}
          className={ `${tab==='appointments' ? 
        'bg-indigo-100 text-primaryColor':
        'bg-transparent text-headingColor'} w-full btn mt-0 rounded-md `} >
          Appointments
          </button>
          <button 
           onClick={()=>setTab('settings')}
          className={ `${tab==='settings' ? 
        'bg-indigo-100 text-primaryColor':
        'bg-transparent text-headingColor'} w-full btn mt-0 rounded-md `} >
          Profile
          </button>
          <div className="mt-[100px] w-full">
           <button onClick={handleLogout} className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white">
            Logout</button>
           <button onClick={handleDeleteAccount}className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">
            Delete Account</button>
         </div>
      </div>
  </div>
  );
  
};

export default Tabs;
