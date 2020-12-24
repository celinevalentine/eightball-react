import React, { useState } from 'react';
import {randColor,ColorBox} from './ColorBox';
import colors from './colors';

const ColorBoxes = (props) => {
    
    const [ color, setColor] = useState(colors);

    return (
        //loop through colors array to display each color box with a random color
    <>  
        {colors.map((color,i) =>{
            return(
            <div>
               <ColorBox key={i} /> 
			</div>
            );
        })} 
             {/* click btn to a. select a box while other boxes show no color???? b. change to a random color for that box */}
        <button onClick={()=> setColor(randColor())}>Change Color!</button>    
    </>
    );
    
};

export default ColorBoxes;
