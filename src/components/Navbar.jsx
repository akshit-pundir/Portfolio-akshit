import React from 'react';
import { Link } from 'react-router-dom';
import { styles} from '../style';
import {navLinks} from '../constants';
import { logo,menu,close } from '../assets';

const Navbar = () => {

const[active,setActive]=React.useState("");
const [toggle,setToggle]=React.useState(false);


  return (
    <nav  className={` ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary `} >
        <div className=' w-full flex justify-between items-center max-w-7xl mx-auto'>
          <Link to="/" className='flex items-center gap-2' onClick={ () =>{
                setActive("");
                window.scrollTo(0,0);
            } }>
            
              <img src={logo} alt="" className='  w-9 h-9 object-contain ' />
              <p className='text-white text-[18px] font-bold cursor-pointer flex'>Akshit | Pundir</p>
            
          </Link>
              <ul className=' list-none hidden sm:flex flex-row gap-10'>
                {navLinks.map( (item) =>(
                  <li key={item.id} className={`${active == item.title ? 'text-white' :'text-secondary'} hover:text-white text-[18px] cursor-pointer font-medium`}
                  onClick={ () => setActive(item.title)  }  >
                    
                    <a href={`#${item.id}`}> {item.title} </a>
                  
                  </li>
                
                ) )  }
              
              </ul>
              <div className=' sm:hidden flex flex-1 items-center justify-end'>
                  <img src={ toggle? close: menu} alt="menu" className=' w-[28px]  h-[28px] object-contain cursor-pointer ' onClick={ () => setToggle(!toggle)} />
                   
                   <div className={`${ !toggle ? 'hidden':'flex'} p-6 black-gradient  absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                   <ul className=' list-none  flex  items-start justify-end flex-col gap-4'>
                   {navLinks.map( (item) =>(
                  <li key={item.id} className={`${active == item.title ? 'text-white' :'text-secondary'} font-poppins hover:text-white text-[16px] cursor-pointer font-medium`}
                  onClick={ () =>{setToggle(!toggle); 
                  setActive(item.title) ;
                   }  }>
                    
                    <a href={`#${item.id}`}> {item.title} </a>
                  
                  </li>
                
                ) )  }
              
              </ul>
                    
                    </div> 


                </div>    

        </div>


    </nav>
  )
}

export default Navbar