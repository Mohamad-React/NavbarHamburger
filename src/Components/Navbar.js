import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { navlinks } from './data';
const Navbar = () => {
    return (
        <div>
            <nav>
                  
                  <button>  {GiHamburgerMenu}   </button>
                  
                  <div>
                      
                      <ul>
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