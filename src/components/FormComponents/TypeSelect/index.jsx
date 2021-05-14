import { useState } from 'react';
import Button from '../../Button';
import ButtonsContainer from '../ButtonsContainer';

function TypeSelect({ form, setForm }) {
  const [type, setType] = useState('text');

  function addQuestion() {
    const number = form.questions.length + 1;
    const newQuestions =
      type === 'text'
        ? [
            ...form.questions,
            {
              title: `Pergunta ${number}`,
              value: '',
              type,
            },
          ]
        : [
            ...form.questions,
            {
              title: `Pergunta ${number}`,
              type,
              options: [{ value: 'Opção 1', checked: false }],
            },
          ];
    setForm({ ...form, questions: newQuestions });
  }

  return (
    <ButtonsContainer className="select-type">
      <Button bold onClick={addQuestion} type="button">
        Adicionar pergunta
      </Button>
      <Button as="select" value={type} onChange={(e) => setType(e.target.value)} secondary bold>
        <option value="text">Texto</option>
        <option value="radio">Múltipla escolha</option>
        <option value="checkbox">Caixas de seleção</option>
      </Button>
    </ButtonsContainer>
  );
}

export default TypeSelect;
