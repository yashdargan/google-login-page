import './Navbar.css'
import {TbGridDots} from 'react-icons/tb';
const Navbar = () => {
    return ( 
        <div className="top__contanier">
        <a className='links'>Gmail</a>
        <a className='links'>Image</a>
        <TbGridDots className='icon' />
        <img src="assert/icons8-user-50.png" alt="profile-img" />
        </div>

     );
}
 
export default Navbar;