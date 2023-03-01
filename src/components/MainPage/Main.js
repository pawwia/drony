import React from 'react';
import './Main.css'
import Header from './Header';
import Element from './Element';

const Main= (props) => {
    const {data}=props;
    return ( <div className="main">
<Header tit1={data[0]} tit2={data[1]} />
<Element
 title={data[2]}
 para={data[3]}
 butLink={""}
 butTit={data[4]}
 img={"1"}
 position={"left"}
/>
<Element
 title={data[5]}
 para={data[6]}
 butLink={""}
 butTit={data[7]}
 img={"2"}
 position={"right"}
/>
<Element
 title={data[8]}
 para={data[9]}
 butLink={""}
 butTit={data[10]}
 img={"3"}
 position={"left"}
/>
<Element
 title={data[11]}
 para={data[12]}
 butLink={""}
 butTit={data[13]}
 img={"6"}
 position={"right"}
/>

    </div> );
}
 
export default Main