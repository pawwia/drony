import React, {useState,useEffect} from 'react';
import './DsConfigurator.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import PayApp from './Stripe';

const serviceURL="http://localhost/drony/getServices.php";
const citiesURL="http://localhost/drony/getCities.php";
const avabilityURL="http://localhost/drony/checkAvability.php";
const sendWithpaymentURL="http://localhost/drony/orderAndPay.php";
const justOrderURL="http://localhost/drony/justOrderService.php";

const getData=async(url,data)=>{

    const resp=await fetch(url,{
    method:'POST',
    body:JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json'
    }     });
      const json = await resp.json();
        return json;
    }

const DsConfigurator = (props) => {

    useEffect(
        ()=>{
            const data={
                category:props.category
            }
            const resultsGetCities= getData(serviceURL,data)
            if(resultsGetCities)
            { 
                resultsGetCities.then((result)=>{
                    if (result)
                    {setLoading(0);
            setDataService(result);
                  
                    }
                    else 
                    {
alert("Nastąpił błąd i nie udało nam się pobrac danych. Odświez stronę lub spróbuj ponownie później.")                    
                    }
                })}
        
        
        },[props.category] )


    useEffect(
()=>{
    const data={
    }
    const resultsGetCities= getData(citiesURL,data)
    if(resultsGetCities)
    {
        resultsGetCities.then((result)=>{
            if (result)
            {setLoading(0);
    setDataCities(result);
          
            }
            else 
            {
            setLoading(0);
            
            }
        })}


},[] )
    useEffect(()=>{

setStep(1);
setDateToCheck(null);
setVidLong(null);
setPriceService(0)
setPriceTransp(0);
setDate(null)
setAvalable(null)
setAverror(null);
setClosestCity("");

    },[props.category])
    window.addEventListener("beforeunload", (ev) => 
    {  
        ev.preventDefault();
        return ev.returnValue = 'Rozpocząłeś rezerację. Czy jesteś pewny, że chcesz anulować?';
    });

const [dataCities,setDataCities]=useState(null);
const [dataService,setDataService]=useState(null);


    const d=new Date();
const Month=(d.getMonth()<9)?('0'+(d.getMonth()+1)):(d.getMonth()+1);
const Day=(d.getDate()<9)?('0'+(d.getDate())):(d.getDate());
const Year=d.getFullYear();
const Today=Year+'-'+Month+'-'+Day;
const max=(Year+1)+'-'+Month+'-'+Day;
const [loading,setLoading]=useState(0);
const [errorText,setErrorText]=useState(null);

const [dateToCheck,setDateToCheck]=useState();
const [avalable,setAvalable]=useState(null);
const [averror,setAverror]=useState(null);
const [date,setDate]=useState(null);
const [daysToDate,setDaysToDate]=useState(null);

const [vidLong, setVidLong]=useState(null);

const [adress, setAdress]=useState("");
const [zip, setZip]=useState("");
const [city, setCity]=useState("");
const [closestCity, setClosestCity]=useState("");
const [timing, setTiming]=useState("");
const [description, setDescription]=useState("");


const [adressOk, setAdressOk]=useState(0);
const [zipOk, setZipOk]=useState(0);
const [cityOk, setCityOk]=useState(0);
const [closestCityOk, setClosestCityOk]=useState(0);
const [timingOk, setTimingOk]=useState(0);
const [descriptionOk, setDescriptionOk]=useState(0);


const [name, setName]=useState("");
const [surName, setSurName]=useState("");
const [email, setEmail]=useState("");
const [tel, setTel]=useState("");

const [nameOk, setNameOk]=useState(0);
const [surNameOk, setSurNameOk]=useState(0);
const [emailOk, setEmailOk]=useState(0);
const [telOk, setTelOk]=useState(0);

const [payment, setPayment]=useState(null);
const [rules, setRules]=useState(false);



const [step, setStep]=useState(1);
const [result,setResult]=useState(null)


const [priceService,setPriceService]=useState(0);
const [priceTransp,setPriceTransp]=useState(0);

function dniDoDaty(da) {
    const dzis = d;
    const dzienza=new Date(da)
    const milisekundyWJednymDniu = 1000 * 60 * 60 * 24;
    const pozostaleDni = Math.ceil((dzienza - dzis) / milisekundyWJednymDniu);
    return pozostaleDni;
  }

const step1=()=>{
    setDaysToDate(dniDoDaty(dateToCheck))
    setDate(dateToCheck);
    setAvalable(null)
    setAverror(null)
    setStep(2)
}

const countPriceService =(opt)=>{



    

if (opt===1)
{
    if(daysToDate<30) setPriceService(dataService[0].price1i)
    else if(daysToDate>=30&&daysToDate<60) setPriceService(dataService[0].price1ii)
    else if (daysToDate>=60) setPriceService(dataService[0].price1iii)
}
else if (opt===2)
{
    if(daysToDate<30) setPriceService(dataService[0].price2i)
    else if(daysToDate>=30&&daysToDate<60) setPriceService(dataService[0].price2ii)
    else if (daysToDate>=60) setPriceService(dataService[0].price2iii)
}
else if (opt===3)
{
    if(daysToDate<30) setPriceService(dataService[0].price3i)
    else if(daysToDate>=30&&daysToDate<60) setPriceService(dataService[0].price3ii)
    else if (daysToDate>=60) setPriceService(dataService[0].price3iii)}





}
const valAdress=(e)=>{
setAdressOk(0);
setAdress(e.target.value);
if(e.target.value.length >7)
{
 setAdressOk(1);
}
else 
{
    setAdressOk(0);
}

}
const valZip=(e)=>{
    setZipOk(0);
    setZip(e.target.value);
    if(e.target.value.length ===6)
    {
        if(e.target.value.match("^[0-9]{2}-[0-9]{3}$"))
        {
     setZipOk(1);
        }
     else  { setZipOk(0); console.log("nie")}

    }
    else 
    {
    setZipOk(0);
    }
    
}
const valCity=(e)=>{

    setCityOk(0);
setCity(e.target.value);
if(e.target.value.length >5)
{
 setCityOk(1);
}
else 
{
    setCityOk(0);
}
}
const valClosestCity=(e)=>{
    setClosestCityOk(0);
    setClosestCity(e.target.value);
    setPriceTransp(e.target.value*dataService[0].pricetransport)
    if(e.target.value.length >0)
    {
     setClosestCityOk(1);
    }
    else 
    {
        setClosestCityOk(0);
    }
    
}
const valTiming=(e)=>{

    setTimingOk(0);
setTiming(e.target.value);
if(e.target.value.length >1)
{
 setTimingOk(1);
}
else 
{
    setTimingOk(0);
}
    
}
const valDescription=(e)=>{
    setDescriptionOk(0);
    setDescription(e.target.value);
    if(e.target.value.length >10)
    {
     setDescriptionOk(1);
    }
    else 
    {
        setDescriptionOk(0);
    }

    
}
const valName=(e)=>{
    setNameOk(0);
    setName(e.target.value);
    if(e.target.value.length >2)
    {
     setNameOk(1);
    }
    else 
    {
        setNameOk(0);
    }
    
    }
    const valSurname=(e)=>{
        setSurNameOk(0);
        setSurName(e.target.value);
        if(e.target.value.length >2)
        {
         setSurNameOk(1);
        }
        else 
        {
            setSurNameOk(0);
        }
        
        }

    
    
    const valTel=(e)=>{
    
        setTelOk(0);
    setTel(e.target.value);
    if(e.target.value.length >7)
    {
     setTelOk(1);
    }
    else 
    {
        setTelOk(0);
    }
    }
    const valEmail=(e)=>{
        setEmailOk(0);
        setEmail(e.target.value);
        if(e.target.value.length>5)
        {


            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

            if (e.target.value.match(validRegex)) {
        
        
            setEmailOk(1);}
            else     setEmailOk(0);        }
        else{
            setEmailOk(0);
        }
        }

        const onlyorder =()=>{
            setLoading(1);
            setStep(6);
            const data={
data_uslugi:date,
kategoria:props.category,
opcja:vidLong,
kmtransp:closestCity,
ulica:adress,
kod_pocztowy:zip,
miejscowosc:city,
przedzial_czasowy:timing,
opis_zlecenia:description,
imie:name,
nazwisko:surName,
email:email,
tel:tel,
platnosc_online:false,
id_platnosc:"Przelew tradycyjny",
cena:priceService+priceTransp,
oplacono_online:false,
            }

            const orderWithout= getData(justOrderURL,data)
            if(orderWithout)
            {
                orderWithout.then((result)=>{
                    if (result)
                    {setLoading(0);
setResult(result)                  
                    }
                    else 
                    {
                    setLoading(0);
                    
                    }
                })}

        }



        const orderandpay =()=>{
          setLoading(1);
          setStep(6);
          const data={
            data_uslugi:date,
            kategoria:props.category,
            opcja:vidLong,
            kmtransp:closestCity,
            ulica:adress,
            kod_pocztowy:zip,
            miejscowosc:city,
            przedzial_czasowy:timing,
            opis_zlecenia:description,
            imie:name,
            nazwisko:surName,
            email:email,
            tel:tel,
            platnosc_online:true,
            id_platnosc:"nie dokonczono online",
            cena:priceService+priceTransp,
            oplacono_online:false,
                        }
                        const orderAndPay= getData(sendWithpaymentURL,data)
                        if(orderAndPay)
                        {
                            orderAndPay.then((result)=>{
                                if (result)
                                {setLoading(0);
            setResult(result)                  
                                }
                                else 
                                {
                                setLoading(0);
                                
                                }
                            })}
         

        }

        const checkAvalable=()=>{
            setAverror(0);

                const data={
                    dateAv:dateToCheck
                }
                const avability= getData(avabilityURL,data)
                if(avability)
                { 
                    avability.then((result)=>{
                        if (result)
                        {
setAvalable(result.avable)                      
                        }
                        else 
                        {
    setAverror(1);
                        
                        }
                    })}
            
            
            


        }

    return ( <>{dataService? <div className="DsConfigurator">
<div className="spec">
<h2> {dataService[0].description}</h2>

<video width="400" controls>
  <source src={require('../../../intMedia/przyklad.mp4')} type="video/mp4"/>
  <source src={require('../../../intMedia/przyklad.mp4')} type="video/ogg"/>
</video>
<h4> Specyfikacja:</h4>
<p>{dataService[0].specyfikacja}</p>
</div>
<div className="configuration">
    <h4> Konfiguracja filmu</h4>
    {step===1?<div className='selectDate'>

Wybierz datę: <input type="date"  min={Today} max={max} value={dateToCheck} onChange={(e)=>{setDateToCheck(e.target.value); setAvalable(null); setAverror(null);}} />
{avalable===false?<div className="avError">Niestety ten termin nie jest dostępny. Spróbuj inny lub skontakuj się osobiście.</div>:null}
{dateToCheck?<div className="navigation">

<div className="right" onClick={checkAvalable}>Sprawdź dostępność</div>

         {avalable===true? <div className="right" onClick={step1}>Następny krok</div>:null}
          
              </div>:null}

    </div>:
    step===2?
    <><div className="confLong">   

    <div onClick={()=>{setVidLong(1);countPriceService(1) }} className={vidLong===1?"elementActive element":"element"}><div className="elementTitle">{dataService[0].title1}</div><div className="elementPrice">{daysToDate<30?dataService[0].price1i:daysToDate>=30&&daysToDate<60?dataService[0].price1ii:daysToDate>=60?dataService[0].price1iii:null} PLN</div><div className="elementDesc">{dataService[0].desc1}</div></div>
    <div onClick={()=>{setVidLong(2);countPriceService(2)}} className={vidLong===2?"elementActive element":"element"}><div className="elementTitle">{dataService[0].title2}</div><div className="elementPrice">{daysToDate<30?dataService[0].price2i:daysToDate>=30&&daysToDate<60?dataService[0].price2ii:daysToDate>=60?dataService[0].price2iii:null} PLN</div><div className="elementDesc">{dataService[0].desc2} </div></div>
    <div onClick={()=>{setVidLong(3);countPriceService(3)}} className={vidLong===3?"elementActive element":"element"}><div className="elementTitle">{dataService[0].title3}</div><div className="elementPrice">{daysToDate<30?dataService[0].price3i:daysToDate>=30&&daysToDate<60?dataService[0].price3ii:daysToDate>=60?dataService[0].price3iii:null} PLN</div><div className="elementDesc">{dataService[0].desc3}</div></div>
    
    
        </div>
          {vidLong?<div className="navigation">
          <div className="right" onClick={()=>setStep(1)}>Poprzedni krok</div>

          <div className="right" onClick={()=>setStep(3)}>Następny krok</div>
          
              </div>:null}</>:step===3?
             <> <div className="whereService">
                <p>Miejsce, czas i opis usługi</p>
<input type="text" placeholder='Ulica i numer' value={adress}  onChange={(e)=>valAdress(e)}/><span className="valSign">{adress===""?null:adress.length>0 && adressOk===1? <FontAwesomeIcon inverse icon={faCheck}/>:<FontAwesomeIcon inverse icon={faX}/>}</span>
<input type="text" placeholder='Kod pocztowy' value={zip}  onChange={(e)=>valZip(e)}/><span className="valSign">{zip===""?null:zip.length>0 && zipOk===1? <FontAwesomeIcon inverse icon={faCheck}/>:<FontAwesomeIcon inverse icon={faX}/>}</span>
<input type="text" placeholder='Miejscowość' value={city}  onChange={(e)=>valCity(e)}/><span className="valSign">{city===""?null:city.length>0 && cityOk===1? <FontAwesomeIcon inverse icon={faCheck}/>:<FontAwesomeIcon inverse icon={faX}/>}</span>
<select value={closestCity} onChange={valClosestCity}><option value=""> Najblizsze Miasto</option>{dataCities?dataCities.map((option)=> <option key={option.id} value={option.km}>{option.miasto}</option>):null}</select><span className="valSign">{closestCity===""?null:closestCity.length>0 && closestCityOk===1? <FontAwesomeIcon inverse icon={faCheck}/>:<FontAwesomeIcon inverse icon={faX}/>}</span>
<input type="text" placeholder='Przedział czasowy' value={timing}  onChange={(e)=>valTiming(e)}/><span className="valSign">{timing===""?null:timing.length>0 && timingOk===1? <FontAwesomeIcon inverse icon={faCheck}/>:<FontAwesomeIcon inverse icon={faX}/>}</span>
<textarea placeholder='opis zlecenia' value={description}   onChange={(e)=>valDescription(e)}></textarea><span className="valSign">{description===""?null:description.length>0 && descriptionOk===1? <FontAwesomeIcon inverse icon={faCheck}/>:<FontAwesomeIcon inverse icon={faX}/>}</span>



              </div>
               <div className="navigation">
               <div className="right" onClick={()=>setStep(2)}>Poprzedni krok</div>
     
              {adressOk===1&&zipOk===1&&cityOk===1&&closestCityOk===1&&timingOk===1&&descriptionOk===1?<div className="right" onClick={()=>setStep(4)}>Następny krok</div>:null}
               
                   </div>
              
                   </>
              
              :step===4?
            <> <div className='whereService'>

<input type="text" placeholder='Imię' value={name}  onChange={(e)=>valName(e)}/><span className="valSign">{name===""?null:name.length>0 && nameOk===1? <FontAwesomeIcon inverse icon={faCheck}/>:<FontAwesomeIcon inverse icon={faX}/>}</span>
<input type="text" placeholder='Nazwisko' value={surName}  onChange={(e)=>valSurname(e)}/><span className="valSign">{surName===""?null:surName.length>0 && surNameOk===1? <FontAwesomeIcon inverse icon={faCheck}/>:<FontAwesomeIcon inverse icon={faX}/>}</span>
<input type="text" placeholder='Adres e-mail' value={email}  onChange={(e)=>valEmail(e)}/><span className="valSign">{email===""?null:email.length>0 && emailOk===1? <FontAwesomeIcon inverse icon={faCheck}/>:<FontAwesomeIcon inverse icon={faX}/>}</span>
<input type="text" placeholder='Numer telefonu' value={tel}  onChange={(e)=>valTel(e)}/><span className="valSign">{tel===""?null:tel.length>0 && telOk===1? <FontAwesomeIcon inverse icon={faCheck}/>:<FontAwesomeIcon inverse icon={faX}/>}</span>


              </div>
              <div className="navigation">
               <div className="right" onClick={()=>setStep(3)}>Poprzedni krok</div>
     
              {nameOk===1&&surNameOk===1&&emailOk===1&&telOk===1?<div className="right" onClick={()=>setStep(5)}>Następny krok</div>:null}
               
                   </div>
           </> : step===5?<><div className='sumup'>
<select value={payment} onChange={e=>setPayment(e.target.value)}><option value=""> Wybierz płatność</option><option value="przelew">Przelew tradycyjny</option> <option value="online">Płatność online</option></select>
<input type="checkbox" value={rules} onChange={(e)=>setRules(e.target.checked )} name="checkbox" id="checkbox_id"  />
<label for="checkbox_id">Administratorem danych osobowych jest nazwa firmy. Dane wpisane w dormularzu kontaktowym będą przetwarzane w celu udzielenia odpowiedzi na przesłane zapytanie.</label>


           </div>
           <div className="navigation">
               <div className="right" onClick={()=>setStep(4)}>Poprzedni krok</div>
     
              {rules===true&&payment==="przelew"?<div className="right" onClick={onlyorder}>Zarezerwuj</div>:rules===true&&payment==="online"?<div className="right" onClick={orderandpay}>Zamów i zapłać</div>:null}
               
                   </div>
           </>:step===6?<div className='finalbox'>

{loading===true?<div className='Loading'>Proszę czekać... </div>:null}
{payment==="online"?<div className="finalOnline">
{result?<div className="final">
<h2> Gratulacje</h2>
<p>{result.msg?result.msg:null}</p>
<PayApp 
data_uslugi={date}
kategoria={result.kategoria}
opcja={result.opcja}
kmtransp={result.km}
id={result.id}
/>




    </div>:null}


</div>:<div className="finalOnlyBook">
    {result?<div className="final">
<h2> Gratulacje</h2>
<p>{result.msg?result.msg:null}</p>

    </div>:null}
    
    </div>}



           </div>:null}
 
    <div className="summary">
<p>Podsumowanie kosztów:</p>
<div>Usługa: {priceService} PLN</div> 
<div>Dojazd:{priceTransp} PLN</div>
 <div>Łącznie: {priceTransp+priceService} PLN</div>


    </div>
</div>

    </div>:<div className='brak'>Trwa ładowanie...</div>}</>);
}
 
export default DsConfigurator;