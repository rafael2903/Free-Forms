import { Container } from './styles';
import QuestionOption from '../QuestionOption';
import Title from '../Title';

function Question({ form, setForm, question }) {
  function changeQuestion(currentQuestion, newTitle) {
    let newQuestion;
    const newQuestions = form.questions.map((formQuestion) => {
      newQuestion = formQuestion;
      if (formQuestion.id === currentQuestion.id) {
        newQuestion.title = newTitle;
      }
      return newQuestion;
    });

    const newForm = { ...form, questions: newQuestions };

    setForm(newForm);
  }

  return (
    <Container>
      <Title
        size="sm"
        value={question.title}
        onChange={(e) => changeQuestion(question, e.target.value)}
      />
      {question.options ? (
        question.options.map((option) => <QuestionOption value={option} type={question.type} />)
      ) : (
        <QuestionOption value="Resposta" type={question.type} />
      )}
    </Container>
  );
}
export default Question;
