import React from 'react';
import {Link} from 'react-router-dom'
function Home(){
    return(
        <div>
            <H1>
                Home
            </H1>
            {/*<Link to = "/About">Ir para a página Sobre</Link>*/}
            <Link to = {{
                pathname = "/About",
                state:{
                    nome: 'Antonio',
                    idade: 36
                }
            }}>Ir para a página Sobre</Link>
        </div>
    )
}
export default Home