import React, {useState} from 'react';
import './DroneServices.css'
import DsConfigurator from './ds/DsConfigurator';




const DroneServices = () => {



    const [category, setCategory]=useState(null);
    return ( <div className="droneServices">
            <h3> Wybierz kategorię filmu</h3>

<div className="categories">
<div onClick={()=>setCategory(1)} className="catElement">Film weselny</div>
<div onClick={()=>setCategory(2)} className="catElement">Film okolicznościowy</div>
<div onClick={()=>setCategory(3)} className="catElement">Inspekcja</div>
<div onClick={()=>setCategory(4)} className="catElement">Film reklamowy</div>
<div onClick={()=>setCategory(5)} className="catElement">Widoki</div>


</div>
<h3> Skonfiguruj usługę</h3>
{category?<DsConfigurator category={category}/>:"Wybierz kategorię powyzej."}
    </div> );
}
 
export default DroneServices;