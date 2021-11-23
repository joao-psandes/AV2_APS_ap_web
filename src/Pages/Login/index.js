import React, {useContext, useState} from 'react';

import {UsuarioContext} from '../../Contexts/user';

import {
    Main,
    Header,
    Content,
    Footer,
    ContainerlogoPharse,
    ContainerSignIn
} from './styles';

function Login(){
    const {signIn, signUp} = useContext(UsuarioContext);

    const [email,setEmail] = useState('antonio@gmail.com'); 
    const [password,setPassword] = useState('123123');

    const handleLogin = async () => {
        try{
            await signIn(email,password)
        }catch(err){
            console.log(err)
        }
    }

    const handleCadastrar = async () => {
        try{
            await signUp(email,password)
        }catch(err){
            console.log(err)
        }
    }

    return(
        <Main>
            <Header>
                
            </Header>
            <Content>
                <ContainerlogoPharse>
                    <div id = "logo">
                        <img src = "/images/logo_white.png" width = "300px"/>
                    </div>
                    <div id = "pharse">
                        <p>Problemas para formar</p>
                        <p>um grupo de trabalho?</p>
                        <p>O Grupou! resolve!</p>
                    </div>
                </ContainerlogoPharse>
                <ContainerSignIn>
                    <div id = "containerLogin">
                        <div id = "containerButtons">
                            <div class = "button">
                                Membro
                            </div>
                            <div class = "button inativo">
                                Convidado
                            </div>
                        </div>
                        <div class = "box">
                            <div class = "title">Email</div>
                            <input placeholder = "Digite o seu Email"/>
                        </div>
                        <div class = "box">
                            <div class = "title">Senha</div>
                            <input placeholder = "Digite sua Senha"/>
                        </div>
                        <div class = "forgotCredentials">
                            Esqueci minha senha
                        </div>
                        <div id = "containerLoginOrJoin">
                            <div class = "button invert" onClick = {handleCadastrar}>Cadastre-se</div>
                            <div class = "button" onClick = {handlelogin}>Entrar</div>
                        </div>
                    </div>
                </ContainerSignIn>
            </Content>
            <Footer>
                <div id = "logo">
                    <img src = "/images/logo_white.png" width = "150px"/>
                </div>
                <div id = "about">
                    <p>Contato</p>
                    <p>contato@grupou.com.br</p>
                </div>
                <div id = "social">
                    <img src = "/images/logo_linkedin.png" width = "50px"/>
                    <img src = "/images/logo_instagram.png" width = "50px"/>
                    <img src = "/images/logo_facebook.png" width = "50px"/>
                </div>
            </Footer>
        </Main>
    )
}
export default Login