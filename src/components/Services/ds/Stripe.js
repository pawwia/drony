
import React, {useState, useEffect} from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
import './Stripe.css'

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51MZrPHI3t5dHU9KxKD73Kwn6YMw9JUP7DO3MrHCSO1DMd8cl7l7OA6TqJ0jYs4QAnYA0anWgRASa56KXrX20sBgX00gvHERgnZ");

const PayApp = (props) => {
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:80/drony2/payments/create.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id:5, km:props.kmtransp, date:props.data_uslugi, num:props.kategoria, long:props.opcja}),//podajemy itemy -  poprawic
          })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, []);
    
      const appearance = {
        theme: 'night',
      };
      const options = {
        clientSecret,
        appearance,
      };

    return ( 
        <div className="payApp">
{clientSecret&&(
<Elements options={options} stripe={stripePromise}>

    <CheckOutForm/>
</Elements>


)}


        </div>



     );
}
 
export default PayApp;
