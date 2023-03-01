import React, {useState} from 'react';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faInstagram,  } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faX, faCheck} from '@fortawesome/free-solid-svg-icons';
const Contact = (props) => {
    const {data}=props;

const [name,setName]=useState("");
const [tel,setTel]=useState("");
const [email,setEmail]=useState("");
const [message,setMessage]=useState("");
const [rules,setRules]=useState(false);
const [error,setError]=useState(null);
const [loading,setLoading]=useState(null);
const [isSent,setIsSent]=useState(false);



const [nameOk,setNameOk]=useState(0);
const [telOk,setTelOk]=useState(0);
const [emailOk,setEmailOk]=useState(0);
const [messageOk,setMessageOk]=useState(0);

const formHandle=()=>{
setError(null);
setLoading(0);
if(nameOk===0)
{
    setError("Podaj swoje imię i nazwisko i spróbuj ponownie.")
}
else if(telOk===0)
{
    setError("Podaj poprawny numer telefonu i spróbuj jeszcze raz.")

}
else if(emailOk===0)
{
    setError("Wprowadź poprawny adres email i sprobuj ponownie")

}
else if(messageOk===0)
{
    setError("Wpisz treść wiadomości i spróbuj ponownie")

}
else if( rules===false)
{
    setError("Nie zaakceptowano zgody na przetwarzanie danych osobowych. Spróbuj ponownie.")

}
else 
{
    setLoading(1)
    setIsSent(1)
}


}

const valName=(e)=>{
setName(e.target.value);

if(e.target.value.length>5)
{
   setNameOk(1)

}
else{
    setNameOk(0);
}
}

const valTel=(e)=>{

    setTel(e.target.value);
    if(e.target.value.length>8)
    {
        setTelOk(1);
    }
    else{
        setTelOk(0);
    }
    }

    
    const valEmail=(e)=>{
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

        
        const valMessage=(e)=>{
            setMessage(e.target.value);
            if(e.target.value.length>10)
            {
                setMessageOk(1);
            }
            else{
                setMessageOk(0);
            }
            }
            




    return ( <div className="Contact">
<div className="ContactPop">
<div className="left">
<p>{data[0]}</p>
<div className="form">
<input type="text" placeholder="Imię i nazwisko" value={name} onChange={e=>valName(e)} /><span className="valSign">{name===""?null:name.length>0 && nameOk===1? <FontAwesomeIcon inverse icon={faCheck}/>:<FontAwesomeIcon inverse icon={faX}/>}</span>
<input type="text" placeholder="Numer telefonu" value={tel} onChange={e=>valTel(e)} /><span className="valSign">{tel===""?null:tel.length>0 && telOk===1? <FontAwesomeIcon inverse icon={faCheck}/>:<FontAwesomeIcon inverse icon={faX}/>}</span>
<input type="text" placeholder="Adres e-mail" value={email} onChange={e=>valEmail(e)} /><span className="valSign">{email===""?null:email.length>0 && emailOk===1? <FontAwesomeIcon inverse icon={faCheck}/>:<FontAwesomeIcon inverse icon={faX}/>}</span>
<textarea value={message } placeholder="Treść wiadomości" onChange={e=>valMessage(e)}></textarea><span className="valSign">{message===""?null:message.length>0 && messageOk===1? <FontAwesomeIcon inverse icon={faCheck}/>:<FontAwesomeIcon inverse icon={faX}/>}</span>
<input type="checkbox" value={rules} onChange={(e)=>setRules(e.target.checked )} name="checkbox" id="checkbox_id"  />
<label for="checkbox_id">Administratorem danych osobowych jest nazwa firmy. Dane wpisane w dormularzu kontaktowym będą przetwarzane w celu udzielenia odpowiedzi na przesłane zapytanie.</label>
{error?<div className="error">{error}</div>:null}
{loading?<div className="loading">Trwa wysyłanie. Proszę czekać... </div>:null}

<button className={isSent===1?"isSent":null} onClick={loading?null:formHandle}>Wyślij</button>
</div>
</div>
<div className="right">
    <h2>{data[1]}</h2>
    <div className="contactElements">
        <div className="el">
        <FontAwesomeIcon icon={faPhone} size="2x" />
<a href={"tel:"+data[2].replaceAll(" ", "")}> {data[2]}</a>
        </div>
        <div className="el">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
<a href={"mailto:"+data[3]}> {data[3]}</a>
        </div> <div className="el">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
<a href={"https://facebook.com/"+data[4]}> {data[4]}</a>
        </div> <div className="el">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
<a href={"https://instagram.com/"+data[5]}> {data[5]}</a>
        </div> <div className="el">
        <FontAwesomeIcon icon={faGoogle} size="2x" />
<a href={data[7]}> {data[6]}</a>
        </div>
    </div>
</div>
</div>

        
    </div> );
}
 
export default Contact;