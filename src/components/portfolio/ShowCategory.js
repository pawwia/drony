import React from 'react';
import './ShowCategory.css';
const ShowCategory = (props) => {
    return ( 
        <div className={props.closing===1?'ShowCategory closingShow':'ShowCategory'}>
<div className={props.closing===1?'modal closingModal':'modal'} >
<button onClick={props.close}>zamknij</button>
{console.log(props.closing)}


</div>


        </div>
     );
}
 
export default ShowCategory;