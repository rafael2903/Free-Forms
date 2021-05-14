import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../../components/FormComponents/Form';
import Main from '../../components/Main';
import Title from '../../components/FormComponents/Title';
import Question from '../../components/CreateForm/Question';
import api from '../../services/api';
import Button from '../../components/Button';
import StatusMessage from '../../components/StatusMessage';
import ButtonsContainer from '../../components/FormComponents/ButtonsContainer';
import { getUserId } from '../../services/auth';

// EU05
function CreateForm() {
  const history = useHistory();
  const [type, setType] = useState('text');
  const [error, setError] = useState(false);

  const [form, setForm] = useState({ title: 'Formulário sem título', questions: [] });

  function handleSubmit(e) {
    e.preventDefault();
    api
      .post('/forms', { user_id: getUserId(), question: form })
      .then(() => history.push('/'))
      .catch(() => setError(true));
  }

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
    <Main>
      <Form onSubmit={handleSubmit}>
        <Title
          value={form.title}
          onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
          autoFocus
          onFocus={(e) => e.target.select()}
        />

        {form.questions?.map((question, index) => (
          <Question form={form} setForm={setForm} question={question} questionId={index} />
        ))}

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

        {error && <StatusMessage error>Não foi possível salvar o formulário</StatusMessage>}

        <ButtonsContainer className="actions">
          <Button secondary bold onClick={history.goBack} type="button">
            Cancelar
          </Button>
          <Button bold type="submit">
            Salvar
          </Button>
        </ButtonsContainer>
      </Form>
    </Main>
  );
}

export default CreateForm;
