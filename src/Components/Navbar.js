import React from 'react';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { navlinks } from './data';
import { IoMdClose } from 'react-icons/io';
import styles from "./Navbar.module.css";
const Navbar = () => {
    const [showlink,setShowlink] = useState(false);
   
    return (
        <div >
            <nav >
                   <button className={styles.burger} onClick={()=>setShowlink(!showlink)}> {showlink ? <IoMdClose/> : <FaBars/>}    </button>
                 
                 
                 <div className={`${showlink ? styles.active : styles.container }`}>
                      
                       
                      <ul className={styles.ul}>
                        {navlinks.map((item,index)=>
                          <li key={index}>
                             {item.text}
                          </li>
                        )
                    }
                      </ul>

                  </div> 
                 
                  
                  

                 


            </nav>
        </div>
    );
};

export default Navbar;