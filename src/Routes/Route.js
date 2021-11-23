import React, {useContext} from 'react';
import {Route as ReactDOMRoute, useHistory} from 'react-router-dom';

import {UsuarioContext} from '../Contexts/user';

const Route = (
    {
        isPrivate = false,
        component: Component,
        ...rest
    }
) => {
    const {user, loading} = useContext(UsuarioContext);

    const history = useHistory();

    if(loading){
        return(
            <div>
                <p>Carregando...</p>
            </div>
        )
    }

    // const user = null

    if(!(isPrivate === !!user)){
        history.push(isPrivate ? '/Login':'/Main');
    }
    return(
        <ReactDOMRoute {...rest}
            render = {(props) => {
                return(
                    <Component {...props}/>
                    )
                }
            }/>
        )
    }

export default Route;