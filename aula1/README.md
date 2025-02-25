Aula 1 - 25 de fevereiro de 2025

INTRODUÇÃO A REACT

Para iniciar um projeto em React existem duas formas:

npx create-react-app <nomeDoProjeto>
npm create vite@latest nomeDoProjeto

O Create React App (CRA) é a forma mais tradicional bem documentado e com suporte a várias bibliotecas,porém, possuí um biuld maior sendo útil em projetos menores mas um pouco mais dificil de lidar com projetos maiores.

Já o Vite é mais rápido com foco em agilidade e sua configuração permite personalizar a aplicação e garantir escalabilidade e performance em projetos maiores.

CRIANDO UM COMPONENTE

A estrutura de um componente no React é a seguinte:

import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App

Existe uma extensão no VS Code chamada ES7+ React/Redux/React-Native snippets (dsznajder) que permite criar essa estrutura pelo comando rafce.

Cada componente deve possuir o seu próprio CSS.

Usamos no formulário da página form.jsx essa estrutura:
<main>
    <h1>Formulário de contato</h1>
    <form>
        <fieldset>
            <legend>Dados da mensagem</legend>
(...)

Usamos as tags <h1> <fieldset> e <legend> seguindo as boas práticas de acessibilidade no contexto dos navegadores.

Observe que a tag <placeholder> pode ser considerada um mecanismo de acessibilidade do ponto de vista de instrução ao usuário, porém, não do ponto de vista do mecanismo de busca. E mesmo do ponto de vista do usuário nem sempre essa tag surge efeito significativo pois para usuários com baixa visão ou daotônicos o contraste doplaceholder pode impossibilitar a leitura da isntrução.

Para chamar os componentes devemos realizar a importação deles e então chama-los como tags no arquivo App.jsx. Esse é chamado no arquivo main.jsx que por sua vez é chamado no arquivo index.htnm é o que renderiza as páginas seguindo o padrão Single Page Aplication (SPA).

import './App.css'
import Form from './pages/form'

function App() {

  return (
    <>
      <Form></Form>
    </>
  )
}

export default App
race