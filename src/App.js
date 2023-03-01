
import React, {useState,useEffect} from 'react';
import {Route, Routes,BrowserRouter} from 'react-router-dom';


import './App.css';
import Navi from './components/Navi/Navi';
import Main from './components/MainPage/Main';
import Footer from './components/Footer/Footer';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/Services/Services';
import DroneServices from './components/Services/DroneServices';
import DroneRent from './components/Services/dr/DroneRent';

const LIST_URL = "http://drony.pw-websites.pl/drupal/web/jsonapi/node/trescstrony";


function App() {
const [appData, setAppData]=useState(null)

    useEffect(()=>{

      loadData();    
        },[])

  var dataToUpdate=null;
  const updataData= ()=>{
     loadData()
    setAppData(dataToUpdate)
  }



    const updateData=(responseData)=>
    {
      setAppData(responseData.data)
    }
      const loadData=()=> {
  // Fetch Destinations.
  fetch(LIST_URL, {mode:'cors',
  method: 'GET',
  headers:{
    'Content-Type': 'application/json'
  }  
})
    .then(function (response) {
      return response.json();
    })
    .then((data) => updateData(data))
    .catch(err => console.log('Fetching Destinations Failed', err));
}



  return (<>
   {appData? <BrowserRouter>
          <div className="App">
      <Navi/>
    <Routes>

<Route path="/" element={<Main data={appData[0].attributes.field_bezhtml}/>}/>
<Route path="/kontakt" element={<Contact data={appData[2].attributes.field_bezhtml}/>}/>
<Route path="/portfolio" element={<Portfolio/>}/>
<Route path="/uslugi" element={<Services data={appData[3].attributes.field_bezhtml}/>}/>
<Route path="/uslugi/uslugi-dronem" element={<DroneServices/>}/>
<Route path="/uslugi/wynajem-drona" element={<DroneRent/>}/>


    </Routes>
<Footer data={appData[1].attributes.field_bezhtml}/>
    </div>
    </BrowserRouter>:null}</>
     );
}

export default App;
