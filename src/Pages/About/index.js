import React from 'react';
import {useLocation,useHistory} from 'react-router-dom';
let location = useLocation();
let {nome} = location.state || '';
let history = useHistory();
const HandleClick = () =>{
    history.push('/Chat')
}
function About(){
    return(
        <div>
            <H1>
                About {{nome}}
            </H1>
            <button type = "button" onClick = {HandleClick}>
                Ir para o Chat
            </button>
        </div>
    )
}
export default About