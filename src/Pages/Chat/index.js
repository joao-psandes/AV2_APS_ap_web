import React, {useContext,useState,useEffect} from 'react';

import {UsuarioContext} from '../../Contexts/user';

import firebaseApp from '../../Services/firebase';

import {getFirestore,addDoc,collection,onSnapshot,query,where} from 'firebase/firestore';

function Chat(){
    const db = getFirestore(firebaseApp);

    const [messages,setMessages] = useState([]);

    const {user, signOut} = useContext(UsuarioContext);

    useEffect(() => {
        const unsub = onSnapshot(query(collection(db,"Mensagens"),where("Lido","!=",true))
        ,(querySnapshot) => {
            const tmp = [];

            querySnapshot.forEach(async (document) => {
                tmp.push({
                    id: document.id,
                    ...document.data()
                })
            })

            setMessages(tmp)
        });

        return() => {
            unsub()
        }

    },[])

    async function handleMessage(){
        try{
            await addDoc(collection(db,'Mensagens'),{
                mensagem: 'Olá',
                lido:false
            })
        }catch(err){
            console.log(err);
        }
    }

    return(
        <div>
            <H1>Chat {user? user.email : ''}</H1>
            {messages.map((item) => (
                <p key = {item.id}>{item.id}</p>
            ))}
            <button type = "button" onClick = {() => {handleMessage()}}>Enviar</button>
            <button type = "button" onClick = {() => {signOut()}}>Sair</button>
        </div>
    )
}
export default Chat