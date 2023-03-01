import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = (props) => {
    const {data}=props;


    return ( <div className="Services">
<div className="description">
<h2> Usługi</h2>


</div>
<div className="choose">
<div className="left element">
<div className="elementWrap">
        <h3>{data[0]}</h3>
        <p>{data[1]} </p>
        <Link to="/uslugi/wynajem-drona">{data[2]}</Link>
    </div>
</div>
<div className="middle">
    <h2> {data[6]}</h2>
</div>
<div className="right element">
    <div className="elementWrap">
        <h3> {data[3]}</h3>
        <p>{data[4]}</p>
        <Link to="/uslugi/uslugi-dronem">{data[5]}</Link>
    </div>
</div>
</div>

    </div>  );
}
 
export default Services;