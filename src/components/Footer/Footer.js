import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faGoogle} from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faE } from '@fortawesome/free-solid-svg-icons';
const Footer = (props) => {
    const {data}=props;

    return ( <footer>
<div className="footerDesc">
<h3>{data[0]}</h3>
    <p>{data[1]}</p>
</div>
<div className="footerSocial">
<a href={"tel:"+data[2]} ><FontAwesomeIcon icon={faPhone} inverse size="2x"/></a>
<a href={"mailto:"+data[3]}><FontAwesomeIcon icon={faEnvelope} inverse size="2x"/></a>
<a href={data[4]}><FontAwesomeIcon icon={faFacebook} inverse size="2x"/></a>
<a href={data[5]}><FontAwesomeIcon icon={faInstagram} inverse size="2x"/></a>
<a href={data[6]}><FontAwesomeIcon icon={faGoogle} inverse size="2x"/></a>


</div>

<div className="footerLast">
<div className="footerCopyright">
   Projekt i wykonanie <a href="https://pw-websites.pl">pw-websites</a>
</div>
<div className="footerMenu">
<Link to="/">Start</Link>
<Link to="/portfolio">Portfolio</Link>
<Link to="/uslugi">Usługi</Link>
<Link to="/kontakt">Kontakt</Link>
</div>
</div>
    </footer> );
}
 
export default Footer;