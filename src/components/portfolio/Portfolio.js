import React, {useState} from 'react';
import './Portfolio.css'
import { Link } from 'react-router-dom';
import ShowCategory from './ShowCategory';
const Portfolio = () => {
    const [category,setCategory]=useState(null);
    const [openPopup,setOpenPopup]=useState(0);
    const [closingPopUp,setClosingPopUp]=useState(0);

const closeCategory=()=>{
setClosingPopUp(1);
setTimeout(()=>{
    setOpenPopup(0);

    setCategory(null);
   setClosingPopUp(0);

},800)



}
    const openCategory=(kate)=>{
        console.log("jestem "+kate)
setCategory(kate);
setOpenPopup(1);
    }
    return ( <div className="Portfolio" >
<div className='PortfolioElement' id="port1"> 
<div className='element'>
    <h2> Film weselny</h2>
    <p>Nagranie z wesela, sesja ślubna z dronem</p>
    <button onClick={()=>openCategory("wesele")}>Zobacz realizacje</button>
</div>
</div>

<div className='PortfolioElement' id="port2"> 
<div className='element'>
    <h2> Filmy okolicznościowe</h2>
    <p>bankiety, imprezy, urodziny, jubileusze, </p>
    <button onClick={()=>openCategory("okolicznosciowe")}>Zobacz realizacje</button>
</div>
</div>


<div className='PortfolioElement' id="port3"> 
<div className='element'>
    <h2> Inspekcje</h2>
    <p>Inspekcje trudno dostępnych miejsc z góry. </p>
    <button onClick={()=>openCategory("inspekcje")}>Zobacz realizacje</button>
</div>
</div>
<div className='PortfolioElement' id="port4"> 
<div className='element'>
    <h2> Reklama</h2>
    <p>Profesjonalne materiały reklamowe dla Twojego biznesu! </p>
    <button onClick={()=>openCategory("reklama")}>Zobacz realizacje</button>
</div>
</div>
<div className='PortfolioElement' id="port5"> 
<div className='element'>
    <h2> Widoki</h2>
    <p>Zdjęcia lub film z wybranego miejsca - dom, działka itp. </p>
    <button onClick={()=>openCategory("widoki")}>Zobacz realizacje</button>
</div>
</div>

{category&&openPopup===1?<ShowCategory closing={closingPopUp} close={closeCategory} category={category} />:null}


    </div> );
}
 
export default Portfolio;