import './front.css'
import {FaMicrophone,FaSearch,FaCamera} from 'react-icons/fa'
const Front = () => {
    return (

          <div className="front_contanier">
            <div className="front__view">
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" /> 
        <div className="search_bar">
         <FaSearch className='search_icon'/>   
        <input className="search__bar" type="search" />
        <FaSearch className='search_icon'/>
        <FaCamera className='search_icon'/>
        </div>
        <div className="button__class">
        <button className="btn" >Google Search</button>
        <button className="btn">I'm Feeling Lucky</button>
        </div>
        <div className='front__context'>
        <p>Google offered in:
        हिन्दी বাংলা తెలుగు मराठी தமிழ் ગુજરાતી ಕನ್ನಡ മലയാളം ਪੰਜਾਬੀ</p>
        </div>
        </div>
       
        </div>
    );
}
 
export default Front;