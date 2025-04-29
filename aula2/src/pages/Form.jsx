import React from 'react'

//importando o userState
import { useState } from 'react';

const Form = () => {

    //atribuindo a uma variável para cada campo do formulário com estado inicial vazio
    const [nome, setNome] = useState("");
    const [assunto, setAssunto] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [recado, setRecado] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviando formulário")
        console.log(nome, assunto, mensagem)

        //deixando os campos vazios novamente
        setNome("")
        setAssunto("")
        setMensagem("")
        setRecado("")
    }


    return (
        <main>
            <h1>Formulário de contato</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Dados da mensagem</legend>
                    <label>
                        <span>Nome</span>
                        <input type="text" name='nome' id='nome' 
                        onChange={(e)=>setNome(e.target.value)} value={nome}/>
                    </label>
                    <label>
                        <span>Assunto</span>
                        <input type="text" name='assunto' id='assunto' 
                        onChange={(e)=>setAssunto(e.target.value)} value={assunto}/>
                    </label>
                    <label>
                        <span>Mensagem</span>
                        <input type="text" name='mensagem' id='mensagem' color='30' rows='10' 
                        onChange={(e)=>setMensagem(e.target.value)} value={mensagem}/>
                    </label>
                    <label>
                        <span>Recado em tempo real</span>
                        <input type="text" value={recado} onChange={(e)=>setRecado(e.target.value)} />
                        <p>Você digitou: {recado}</p>
                    </label>
                </fieldset>
                <button type='submit'>Enviar</button>
            </form>
        </main>
    )
}

export default Form