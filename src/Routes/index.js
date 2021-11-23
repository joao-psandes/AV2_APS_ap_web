import React from 'react';

import {BrowserRouter,Switch} from 'react-router-dom'

import Route from './Route';

import Login from '../Pages/Login'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Chat from '../Pages/Chat'
import Pagina404 from '../Pages/Pagina404'

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route component = {Home} path = "/" exact isPrivate/>
                <Route component = {Login} path = "/Login"/>
                <Route component = {About} path = "/About" isPrivate/>
                <Route component = {Chat} path = "/Chat" isPrivate/>
                <Route component = {Home} path = "/Main" isPrivate/>
                <Route component = {Pagina404} path = "*" isPrivate/>
            </Switch>
        </BrowserRouter>
  );
}

export default Routes;