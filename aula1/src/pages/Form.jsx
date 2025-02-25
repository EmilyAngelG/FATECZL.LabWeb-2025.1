import React from 'react'

const Form = () => {
    return (
        <main>
            <h1>Formulário de contato</h1>
            <form>
                <fieldset>
                    <legend>Dados da mensagem</legend>
                    <label>
                        <span>Nome</span>
                        <input type="text" name='nome' id='nome' />
                    </label>
                    <label>
                        <span>Assunto</span>
                        <input type="text" name='assunto' id='assunto' />
                    </label>
                    <label>
                        <span>Mensagem</span>
                        <input type="text" name='mensagem' id='mensagem' color='30' rows='10' />
                    </label>
                </fieldset>
                <button type='submit'>Enviar</button>
            </form>
        </main>
    )
}

export default Form