import '../Styles/Navbar.css'
import logo from '../assets/logo.png';
import { CgMenuGridR } from "react-icons/cg";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";




function Navbar() {
    return (
        <>
        <nav className="navigation-orange">
        <FaPhoneSquareAlt /> <span>*7007 / +995 (32) 2 60 30 60</span>
        <div className='nav-right'>
            <a href='/s'className='links'> სავაჭრო პოლიტიკა </a> 
            <a href='/s'className='links'> განვადება </a> 
            <a href='/s'className='links'> კარიერა </a> 
            <a href='/s'className='links'> Trade In </a> 
            <a href='/s'className='links'> ფილიალები </a> 
            <a href='/s'className='links'> ყველა აქცია </a> 
        </div>                    
        </nav>

        <nav className="navigation">                  
            <button className='button' style={{marginRight: '8rem'}}>            
                <img className='logo'
                src={logo}
                alt="Zoomer"
            /> </button>              

                <button className='btn-orange'>
                    <CgMenuGridR /> <span className='nav-text-small'>ნავიგაცია</span>                    
                </button>        
                <input 
                    className='search'
                    type="text" 
                    placeholder=" ძიება" 
                    onChange={(e)=> console.log(e.target.value)}>                    
                </input>    
                <button className='btn-white'>
                    <RiShoppingCartLine /> <span className='nav-text-small'>კალათა</span>                    
                </button>  
                <button className='btn-white'>
                    <IoPersonOutline /> <span className='nav-text-small'>შესვლა</span>                    
                </button>        
                {/* <button className='button-mic'>  <HiMiniMicrophone /> </button>                          
                <button className='button-medium blue'> <IoPersonOutline />Sign in</button> */}
                
         </nav>
      </>
      )
  }

export default Navbar