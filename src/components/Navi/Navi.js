import React, {useState} from 'react';
import './Navi.css'
import logo from'../../intMedia/logo.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faBars } from '@fortawesome/free-solid-svg-icons';
const Navi= () => {
    const [openMenu, setOpenMenu]=useState(false);
    const [changeMenuPos, setChangeMenuPos]=useState(false);
    const toggleMenuPhone=()=>
    {
setOpenMenu(!openMenu)

    }
    return ( <nav>

<div className="navContent">
<div className="navlogo"><img src={logo} alt="logo" /></div>
<div onClick={openMenu?()=>setOpenMenu(0):null} className={openMenu?"menuButtons openPhoneMenu":"menuButtons"} >

<Link to="/">Start</Link>
<Link to="/portfolio">Portfolio</Link>
<Link to="/uslugi">Usługi</Link>
<Link to="/kontakt">Kontakt</Link>
</div>

</div>
<div onClick={toggleMenuPhone} className='phoneOpen'>{openMenu?<FontAwesomeIcon icon={faX} size="2x"/>:<FontAwesomeIcon icon={faBars} size="2x"/>}</div>

    </nav> );
}
 
export default Navi