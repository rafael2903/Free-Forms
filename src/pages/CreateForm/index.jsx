import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../../components/Form/Form/styles';
import FormHeader from '../../components/Form/FormHeader';
import Main from '../../components/Main';
import Title from '../../components/Form/Title';
import Question from '../../components/Form/Question';
import api from '../../services/api';
import Button from '../../components/Button';
import StatusMessage from '../../components/StatusMessage';
import ButtonsContainer from '../../components/Form/ButtonsContainer';
import { getUserId } from '../../services/auth';

function CreateForm() {
  const history = useHistory();
  const [type, setType] = useState('text');
  const [error, setError] = useState(false);

  const [form, setForm] = useState({ title: 'Formulário sem título', questions: [] });

  function handleSubmit(e) {
    e.preventDefault();
    // api.get('/forms/19').then((res) => console.log(res.data.question));
    api
      .post('/forms', { user_id: getUserId(), question: form })
      .then(() => history.push('/'))
      .catch(() => setError(true));
  }

  function addQuestion() {
    const number = form.questions.length + 1;
    const newQuestions = [
      ...form.questions,
      {
        title: `Pergunta ${number}`,
        type,
        options: ['Opção 1'],
      },
    ];
    setForm({ ...form, questions: newQuestions });
  }

  return (
    <Main>
      <FormHeader />
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
          <Button secondary bold onClick={history.goBack}>
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
