Aula 2 - 29 de abril de 2025

MANIPULANDO ESTADOS DO FORMULÁRIO COM USE STATE

O useState é um hook do React que permite a você criar e gerenciar estados em componentes funcionais.

Sintaxe do useState:
const [valor, setValor] = useState(valorInicial);


IMPUT CONTROLADO

Um input controlado em React é um campo de formulário (como <input>, <textarea>, etc.) cujo valor é controlado pelo estado do componente.

Exemplo simples de um imput controlado:

import { useState } from 'react';

function Formulario() {
  const [nome, setNome] = useState('');

  function handleChange(event) {
    setNome(event.target.value);
  }

  return (
    <div>
      <input type="text" value={nome} onChange={handleChange} />
      <p>Você digitou: {nome}</p>
    </div>
  );
}


Explicando:
value={nome}: O valor do input vem do estado nome.

onChange={handleChange}: Toda vez que o usuário digita, a função handleChange atualiza o estado com o novo valor.

O React controla o que está escrito no campo — por isso é um "input controlado".

