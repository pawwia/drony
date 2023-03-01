import React from 'react';
import { Link } from 'react-router-dom';
import './Element.css'

const Element = (props) => {
    const {
        title,
        para,
        butLink,
        butTit,
        img,
        position,

    }=props
    return ( <div className="Mainelement">

<div className={position=="left"?"LeftSide":"LeftSide inverseRight"}>
<div className="leftImg"><img src={require(`../../intMedia/${img}.jpg`)} alt={title}/></div>
<div className='rightText'>
    <div className="rightContent">
    <h2>{title}</h2>
    <p>{para}</p>
    <Link to={butLink}>{butTit}</Link>

    </div>
   
</div>

</div>




    </div> );
}
 
export default Element;