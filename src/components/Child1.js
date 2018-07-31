//STATELESS


import React from 'react';

const ComponentChild = (props) => {  //STATELESS, because this component just get value from the parrent component (App.js) 
    // (props) -> is parameter name, if you let it empty, you can't call var1 in parrent component (App.js)
    return ( // Return the value in <div> to render 
        <div style={{ backgroundColor: 'yellow' }}>
            <h1>{props.var1}</h1>
            <h1>{props.var2}</h1>
            <h1>{props.var3}</h1>
        </div>
    )
}
// props.var -> to call var1 in parrent component (App.js)
export default ComponentChild;  //Export class ComponentChild