/* eslint-disable no-unused-vars */
import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { Form } from '../../components/Form/Form/styles';
import FormHeader from '../../components/Form/FormHeader';
import Main from '../../components/Main';
import Title from '../../components/Form/Title';
import Question from '../../components/Form/Question';
import api from '../../services/api';
import Button from '../../components/Button';
import ButtonsContainer from '../../components/Form/ButtonsContainer';

function EditForm() {
  const history = useHistory();
  const [type, setType] = useState('text');
  const [form, setForm] = useState(() => ({
    id: 1,
    title: 'Formulário sem título 1',
    questions: [
      { id: 1, title: 'Qual é o seu nome', type: 'text' },
      {
        id: 2,
        title: 'Você gosta de chocolate?',
        type: 'radio',
        options: ['sim', 'não', 'talvez'],
      },
      {
        id: 3,
        title: 'Selecione suas frutas preferidas',
        type: 'checkbox',
        options: ['Maçã', 'Banana', 'Laranja', 'Melancia', 'Mamão'],
      },
    ],
  }));

  function handleSubmit(e) {
    e.preventDefault();
    api
      .get('forms/1')
      .then((res) => res.data.question)
      .then((data) => {
        console.log(JSON.parse(data));
        // data = data.replace("',',");
      });
  }

  return (
    <Main>
      <FormHeader />
      <Form onSubmit={handleSubmit}>
        <Title
          value={form.title}
          onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
        />
        {form.questions?.map((question) => (
          <Question form={form} setForm={setForm} question={question} />
        ))}
        <ButtonsContainer className="select-type">
          <Button bold onClick={history.goBack}>
            Adicionar pergunta
          </Button>
          <Button as="select" value={type} onChange={(e) => setType(e.target.value)} secondary bold>
            <option value="text">Texto</option>
            <option value="radio">Múltipla escolha</option>
            <option value="checkbox">Caixas de seleção</option>
          </Button>
        </ButtonsContainer>

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

export default EditForm;
