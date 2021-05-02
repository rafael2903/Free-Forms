import { HiPlusSm } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';

import { Container, AddOption } from './styles';
import QuestionOption from '../QuestionOption';
import Title from '../Title';
import Button from '../../Button';

function Question({ form, setForm, question, questionId }) {
  function changeTitle(newTitle) {
    const newQuestions = [...form.questions];
    newQuestions[questionId].title = newTitle;
    const newForm = { ...form, questions: newQuestions };
    setForm(newForm);
  }

  function addOption() {
    const newQuestions = [...form.questions];
    newQuestions[questionId].options.push('Opção');
    const newForm = { ...form, questions: newQuestions };
    setForm(newForm);
  }

  function removeQuestion() {
    const newForm = { ...form };
    newForm.questions.splice(questionId, 1);
    setForm(newForm);
  }

  return (
    <Container>
      <Title
        size="sm"
        value={question.title}
        onChange={(e) => changeTitle(e.target.value)}
        onFocus={(e) => e.target.select()}
      />
      <CgClose onClick={removeQuestion} />

      {question.type !== 'text' ? (
        question.options.map((option, index) => (
          <QuestionOption
            value={option}
            type={question.type}
            form={form}
            setForm={setForm}
            questionId={questionId}
            optionId={index}
          />
        ))
      ) : (
        <QuestionOption value="Resposta" type={question.type} />
      )}

      {question.type !== 'text' && (
        <AddOption>
          <Button onClick={addOption} type="button">
            <HiPlusSm size={30} />
            Adicionar opção
          </Button>
        </AddOption>
      )}
    </Container>
  );
}
export default Question;
