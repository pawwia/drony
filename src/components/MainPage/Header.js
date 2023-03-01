import React from 'react';
import './Header.css'
import bgVideo from '../../intMedia/bgvid.mp4'
import { Link } from 'react-router-dom';


const Header = (props) => {
    return ( <header>
<video playsInline autoPlay muted loop >
    <source type="video/mp4"  src={bgVideo}/>
</video>
<div className="onVidContent">

<div className="inVidContent">
<h1> {props.tit1}</h1>
    <h2> {props.tit1}</h2>
    <Link to="/uslugi">Zarezerwuj</Link>
    <Link to="/Portfolio">Portfolio</Link>

</div>
    
</div>

    </header> );
}
 
export default Header;