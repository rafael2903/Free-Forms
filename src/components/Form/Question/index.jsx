import { HiPlusSm } from 'react-icons/hi';
import { useState } from 'react';
import { Container, AddOption } from './styles';
import QuestionOption from '../QuestionOption';
import Title from '../Title';
import Button from '../../Button';

function Question({ form, setForm, question }) {
  const [newOption, setNewOption] = useState('');

  function changeQuestion(newTitle) {
    let newQuestion;
    const newQuestions = form.questions.map((formQuestion) => {
      newQuestion = formQuestion;
      if (formQuestion.id === question.id) {
        newQuestion.title = newTitle;
      }
      return newQuestion;
    });

    const newForm = { ...form, questions: newQuestions };

    setForm(newForm);
  }

  function addOption() {
    let newQuestion;
    const newQuestions = form.questions.map((formQuestion) => {
      newQuestion = formQuestion;
      if (formQuestion.id === question.id) {
        newQuestion.options.push(newOption);
      }
      return newQuestion;
    });

    const newForm = { ...form, questions: newQuestions };

    setForm(newForm);
    setNewOption('');
  }

  return (
    <Container>
      <Title size="sm" value={question.title} onChange={(e) => changeQuestion(e.target.value)} />
      {question.options ? (
        question.options.map((option) => <QuestionOption value={option} type={question.type} />)
      ) : (
        <QuestionOption value="Resposta" type={question.type} />
      )}
      {question.type !== 'text' && (
        <AddOption>
          <Button onClick={addOption}>
            <HiPlusSm size={30} />
            Adicionar opção
          </Button>
          <input
            type="text"
            value={newOption}
            onChange={(e) => setNewOption(e.target.value)}
            placeholder="Insira uma nova opção"
          />
        </AddOption>
      )}
    </Container>
  );
}
export default Question;
