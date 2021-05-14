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
import TypeSelect from '../../components/FormComponents/TypeSelect';

// EU05
function CreateForm() {
  const history = useHistory();
  const [error, setError] = useState(false);

  const [form, setForm] = useState({ title: 'Formulário sem título', questions: [] });

  function handleSubmit(e) {
    e.preventDefault();
    api
      .post('/forms', { user_id: getUserId(), question: form })
      .then(() => history.push('/'))
      .catch(() => setError(true));
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

        <TypeSelect form={form} setForm={setForm} />

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
